# JSHint

### safe coding
* jslint: www.jslint.com
* jshint: www.jshint.com
* eslint: www.eslint.org (Nikolas C. Zakas)

> hint: placement of curly braces: solve it socially (talk to the team)

* `"use strict"` -> check common mistakes at runtime
* Immediately Invoked Function Expression: create a function and execute immediately. Nothing runs in th globalk namespace, no variable declared pollutes the global namespace.
* in Node, none of the variables are global anyhow. Q: what?

Conclusion:
* iffe
* `"use strict"`
* lint

> Explore:
WebStorm has options for using jslin/jshint/eslint. Check out how that works?


# JavaScript Gotchas

### Scoping
* scope: variables and functions will be in global scope by default. Bad.
* IFFE creates a scope isolated from blobal scope

### `"use strict";`
* in a IFFE `var foo = "bar"` creates a variable in the function scope
* however `foo = bar` (note the missing `var`) will create the variable in the global scope. Ugh!
* "use strict" prevents this

### www.jshint.com/docs/options

Options can be
* enforcing
* relaxing

Prefer starting with really strict. Easier to relax than to tighten later.
* `bitwise`: `a && b` vs. `a & b`
* `curly`: force curly braces. nope.
* `eqeqeq`: true (type coercion sucks)
* `latedef`: good for variables, less so for functions. So `nofunc`
* `nonew`: `new Date()` without using the object is bad.
* `strict`: enforces `use strict;`
* `undef`:

# JavaScript Workflow video

reliable, repeatable build

* version control
* dependencies
* automatic build
* external dependencies

# Loose ends

Check out this: [The Definitive Guide to Object-Oriented JavaScript](letscodejavascript.com/v3/episodes/lessons_learned/12) (25 min video)
Try out [Grunt](letscodejavascript.com/v3/eposides/lab/1)