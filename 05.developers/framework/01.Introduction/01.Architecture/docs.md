---
title: Architecture of the ZOOlanders Framework
taxonomy:
    category: docs
---

The brand new **ZOOlanders Framework** is core that powers all the most recent ZOOlanders extensions, and allows every single
ZOOlanders product to run both on top of ZOO and (in the near future) in a standalone fashion.


### IoC Container

The core of the Framework is an **Inversion of Control** Dependency Injection Container, based on a mix of the popular [Auryn)](https://github.com/rdlowrey/auryn) and [Pimple](http://pimple.sensiolabs.org/) packages

The container is injected in most of the classes as a **protected property**:

```php
<?php

class Controller ... {
	
	public function browse() {
		...
		$this->container->...
	}
}

```

but it can also be accessed from anywhere else

```php
require_once JPATH_LIBRARIES . '/zoolanders/include.php';
$container = \Zoolanders\Container\Container::getInstance();

```

The most useful and cool feature of the IoC is the **automatic dependecy resolve**
This feature allows you to create any class known to the IoC (basically, anything autoloadable) **without caring about the dependecies**
that class has, as long as the are autoloadable as well.

This means that if you have, let's say, a controller:

```php

class Items extends Controller 
{
	public function __construct(ItemsTable $table)
	{
			
	}	
}
```

as you can see, the *Items* class requires a *ItemsTable* oject to be passed to it, that probably has some other dependecies on its own.
Well, with the IoC, you can simply do

```php

$items = $this->container->make('Items');
```

And the class will be constructed with all the required dependecies, magically! Awesome eh?

Moreover, you can also do the same things with methods

```php

class Items extends Controller 
{
	public function download(File $file)
	{
			
	}	
}

$container->make('Items')->execute('download');
```

