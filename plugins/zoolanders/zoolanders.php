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
            'onPageNotFound' => ['onPageNotFound', 1]
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
            $page = $pages->dispatch("/${paths[0]}/basics", true);

            $event->page = $page;
            $event->stopPropagation();
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

}
