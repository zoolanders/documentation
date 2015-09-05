<?php

namespace Grav\Plugin;

use Grav\Common\Plugin;
use RocketTheme\Toolbox\Event\Event;

class ZoolandersPlugin extends Plugin
{
    public static function getSubscribedEvents()
    {
        return [
            'onPluginsInitialized' => ['onPluginsInitialized', 0]
        ];
    }

    public function onPluginsInitialized()
    {
        if ($this->isAdmin()) {
            $this->active = false;
            return;
        }

        $this->enable([
            'onTwigSiteVariables' => ['onTwigSiteVariables', 0],
            'onPageNotFound' => ['onPageNotFound', 1],
            'onPageContentRaw' => ['onPageContentRaw', 0]
        ]);
    }

    /**
     * Redirect to basics
     *
     * @param Event $event
     */
    public function onPageNotFound(Event $event)
    {
        $paths = implode($this->grav['uri']->paths(), '/');
        $pages = $this->grav['pages'];

        // if page not found try redirecting to basics page
        if (count($paths) == 1 && $pages->root()->find("/${paths}/basics")) {
            $this->grav->redirectLangSafe("/${paths}/basics");
        }
    }

    /**
     * Set needed variables
     */
    public function onTwigSiteVariables()
    {
        // to avoid redirect loop let's iterate over pages and save page ref
        if (preg_match('/^\/(.*\/.*)\//U', $this->grav['page']->route(), $matches)) {
            $this->grav['twig']->twig_vars['extension'] = $this->grav['page']->find('/'.$matches[1]);
        }
    }

    public function onPageContentRaw(Event $event)
    {
        /** @var Page $page */
        $page = $event['page'];
        $twig = $this->grav['twig'];

        $config = $this->mergeConfig($page);

        if ($config->get('enabled')) {
            // Get raw content and substitute all formulas by a unique token
            $raw = $page->getRawContent();

            // build an anonymous function to pass to `parseLinks()`
            $function = function ($matches) use (&$page, &$twig, &$config) {

                $search = $matches[0];
                $page_path = $matches[2] ?: $matches[1];
                $vars = explode('|', $matches[3]);

                $inject = $page->find($page_path);
                if ($inject) {

                    if ($config->get('processed_content')) {
                        $replace = $inject->content();
                    } else {
                        $replace = $inject->rawMarkdown();
                    }

                    $replace = vsprintf($replace, $vars);

                } else {
                    // replace with what you started with
                    $replace = $matches[0];
                }

                // do the replacement
                return str_replace($search, $replace, $search);
            };

            // set the parsed content back into as raw content
            $page->setRawContent($this->parseInjectLinks($raw, $function));
        }
    }

    protected function parseInjectLinks($content, $function)
    {
        $regex = '/\[plugin:insert-content\]\(((.*)\?(.*)|(.*))\)/i';
        return preg_replace_callback($regex, $function, $content);
    }

}
