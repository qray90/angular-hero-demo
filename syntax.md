# 1. data binding

- `{{}}`
- `[innerHTML]`

```ts
title = "data binding";
html = "<h3> innerHTML </h3>";
```

```html
<div>{{ title }}</div>
<div [innerHTML]="html"></div>
```

# 2. property binding

- `[ ]`

```ts
id = "#app";
title = "this is app";
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

# 4. ngIf

- 单独使用 ngIf

```html
<div *ngIf="condition">显示或这不显示</div>
```

- ngIf 和 then

```html
<div *ngIf="condition; then thenContent;">
  then 和 ngIf 同时存在会忽略这里，显示then
</div>
<ng-template #thenContent> 在这里显示出来 </ng-template>
```

- ngIf 和 else

```html
<div *ngIf="condition; else other_content">
  条件真显示
</div>
<ng-template #other_content> 条件假显示 </ng-template>
```

- ngIf then else

```html
<div *ngIf="condition; then thenContent; else elseContent">
  这里会被忽略
</div>
<ng-template #thenContent> 条件真显示 </ng-template>
<ng-template #elseContent> 条件假显示 </ng-template>
```

# 5. ngSwitch

```html
<ul [ngSwitch]="ngSwitchCondition">
  <li *ngSwitchCase="0">未支付</li>
  <li *ngSwitchCase="1">已支付</li>
  <li *ngSwitchDefault>无效</li>
</ul>
```
