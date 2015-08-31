<?php

namespace Grav\Plugin;

use Grav\Common\Plugin;
use RocketTheme\Toolbox\Event\Event;

class ZoolandersPlugin extends Plugin
{
    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return [
            'onPluginsInitialized' => ['onPluginsInitialized', 0]
        ];
    }

    /**
     * @param Event $event
     */
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
     * Redirect to basics if trying to access root
     *
     * @param Event $event
     */
    public function onPageNotFound(Event $event)
    {
        $paths = $this->grav['uri']->paths();
        $pages = $this->grav['pages'];

        // if accessing root, redirect to basics
        if (count($paths) == 1 && $pages->root()->find("/${paths[0]}/basics")) {
            $this->grav->redirectLangSafe("/${paths[0]}/basics");
        }
    }

    /**
     * Set needed variables to display breadcrumbs.
     */
    public function onTwigSiteVariables()
    {
        $matches = array();
        preg_match('/^\/(.*)\//U', $this->grav['page']->route(), $matches);
        $extension = '/'.$matches[1];

        // to avoid redirect loop let's iterate over pages and save page ref
        foreach ($this->grav['pages']->root()->children() as $page) {
            if ($page->folder() == $matches[1]) {
                $this->grav['twig']->twig_vars['extension'] = $page;
                break;
            }
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
