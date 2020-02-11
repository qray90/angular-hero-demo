# 1. data binding
- `{{}}`
- `[innerHTML]`
```ts
title = 'data binding';
html = '<h3> innerHTML </h3>'
```
```html
<div>{{ title }}</div>
<div [innerHTML]="html"></div>
```

# 2. property binding
- `[ ]`

``` ts
id = '#app'
title = 'this is app'
```
```html
<h1 [id]="id" [title]="title"></h1>
```

# 3.ngFor
```html
<ul>
  <li *ngFor="let item of items; let i = index;">
    {{ i }} --- {{ item }}
  </li>
</ul>
```
