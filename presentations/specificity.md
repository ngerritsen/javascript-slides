===
# Specificity 🔬
## [spes-uh-fis-i-tee]

=== dark
Values

```yml
tag:                1
:pseudo-element:    1
.class:             10
:pseudo-class:      10
[attribute=val]:    10
id:                 100
!important:         1000
{ inline style }:   1000
```

=== dark
```css
.alt-small.button {}
```

10 + 10 = 20

=== dark
```css
.button--small {}
```

10

===
# BEM

=== dark
Naming

```css
.button {} /* block */
.button__icon {} /* element */
.button--small {} /* modifier */
.button--is-disabled {} /* modifier (as state) */
.button__icon--small {} /* modifier on element */
```

===
👍

- Existing standard
- Well documented
- Clear terminology
- Less specificity

===
Example 🔔

===
Google: '_css specificity_'
[www.smashingmagazine.com/2010/04/css-specificity-and-inheritance](https://www.smashingmagazine.com/2010/04/css-specificity-and-inheritance)

===
Google: '_specificity calculator_'
[specificity.keegan.st](https://specificity.keegan.st)

===
Google: '_bem_'
[getbem.com](http://getbem.com)
