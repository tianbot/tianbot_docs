# Markdown使用说明

亲爱的小伙伴们，听说你们想了解Markdown的故事吗？那我就给大家讲一个轻松愉快的故事吧！

很久很久以前，有一个名叫John Gruber的程序员，他每天都要写很多技术文档，但排版格式实在是太麻烦了。于是他决定发扬自己的光和热，用自己的智慧创造出一种简单易学、方便好用的排版语言——Markdown！

Markdown和传统的HTML标记不同，一些复杂的元素都可以通过简单的符号来表示。就像是“#”这个井号，它可以代表不同级别的标题；“*”和“_”就是Markdown的重点强调工具，可以让你的文本变得更加醒目生动。

Markdown还非常贴心，它知道程序员们最珍视的两种东西：时间和精力。所以，你只需要一些简单的符号，它就会帮你完成排版，让你不再为无尽的标签而烦恼。

还有，Markdown非常人性化！它的语法规则像一只聪明机灵的小精灵，指导你去写出结构清晰、排版美观的文档。即使你是一个新手，也能够很快地跟上步伐，轻松愉快地玩转Markdown。

所以呐，小伙伴们，如果你们还在为文档排版烦恼，千万别错过Markdown这个好帮手哦！它简单、实用，而且免费——就像是一颗闪耀的黑钻石，让你的文档变得更加精美动人！

!> 这是一个 MarkDown 教学

## 标题

<!-- tabs:start -->

#### **效果**

<!-- markdownlint-disable-next-line single-title -->

# 标题 1 {docsify-ignore}

## 标题 2 {docsify-ignore}

### 标题 3 {docsify-ignore}

#### 标题 4 {docsify-ignore}

##### 标题 5 {docsify-ignore}

###### 标题 6 {docsify-ignore}

#### **Markdown**

```markdown
# 标题 1

## 标题 2

### 标题 3

#### 标题 4

##### 标题 5

###### 标题 6
```

<!-- tabs:end -->


## Mermaid

<!-- tabs:start -->

#### **效果**

```mermaid
flowchart LR
	Start --> Stop
```

#### **Markdown**

```markdown

flowchart LR
	Start --> Stop

```

<!-- tabs:end -->

## Latex

<!-- tabs:start -->

#### **效果**
公式$\sqrt{3x-1}+(1+x)^2$公式

# Hello Equations!

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

## Maxwell's Equations

| equation                                                                                                                                                                  | description                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| $\nabla \cdot \vec{\mathbf{B}}  = 0$                                                                                                                                      | divergence of $\vec{\mathbf{B}}$ is zero                                               |
| $\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$                                                          | curl of $\vec{\mathbf{E}}$ is proportional to the rate of change of $\vec{\mathbf{B}}$ |
| $\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | _wha?_                                                                                 |

#### **Markdown**

```markdown
公式$\sqrt{3x-1}+(1+x)^2$公式

# Hello Equations!

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

## Maxwell's Equations

|  equation                    | description                   |
| ---------------------------- | ----------------------------- |
| $\nabla \cdot \vec{\mathbf{B}}  = 0$                                                                                                                                      | divergence of $\vec{\mathbf{B}}$ is zero                                               |
| $\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$                                                          | curl of $\vec{\mathbf{E}}$ is proportional to the rate of change of $\vec{\mathbf{B}}$ |
| $\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | _wha?_   

```
<!-- tabs:end -->
## Text

<!-- tabs:start -->

#### **效果**

Body text

**Bold text**

*Italic text*

~~Strikethrough~~

<mark>Marked text</mark>

<pre>preformatted text</pre>

<small>Small Text</small>

This is <sub>subscripe</sub>

This is <sup>superscript</sup>

#### **Markdown**

```markdown
Body text

**Bold text**

*Italic text*

~~Strikethrough~~

<mark>Marked text</mark>

<pre>preformatted text</pre>

<small>Small Text</small>

This is <sub>subscript</sub>

This is <sup>superscript</sup>
```

<!-- tabs:end -->

## Links

<!-- tabs:start -->

#### **效果**

[Inline link](https://google.com)

[Inline link with title](https://google.com "Google")

[Reference link by name][link1]

[Reference link by number][1]

[Reference link by self]

[link1]: https://google.com
[1]: https://google.com
[Reference link by self]: https://google.com

#### **Markdown**

```markdown
[Inline link](https://google.com)

[Inline link with title](https://google.com "Google")

[Reference link by name][link1]

[Reference link by number][1]

[Reference link by self]

[link1]: https://google.com
[1]: https://google.com
[Reference link by self]: https://google.com
```

<!-- tabs:end -->

## Lists

<!-- tabs:start -->

#### **效果**

**Ordered Lists**

1. Ordered 1
1. Ordered 2
   1. Ordered 2a
   1. Ordered 2b
   1. Ordered 2c
1. Ordered 3

**Unordered Lists**

- Unordered 1
- Unordered 2
  - Unordered 2a
  - Unordered 2b
  - Unordered 2c
- Unordered 3

**Task Lists**

- [x] Task 1
- [ ] Task 2
  - [x] Subtask A
  - [ ] Subtask B
- [ ] Task 3

#### **Markdown**

```markdown
**Ordered Lists**

1. Ordered 1
1. Ordered 2
   1. Ordered 2a
   1. Ordered 2b
   1. Ordered 2c
1. Ordered 3

**Unordered Lists**

- Unordered 1
- Unordered 2
  - Unordered 2a
  - Unordered 2b
  - Unordered 2c
- Unordered 3

**Task Lists**

- [x] Task 1
- [ ] Task 2
  - [x] Subtask A
  - [ ] Subtask B
- [ ] Task 3
```

<!-- tabs:end -->

## Blockquotes

<!-- tabs:start -->

#### **效果**

> 横空出世，莽昆仑，阅尽人间春色。  
> 飞起玉龙三百万，搅得周天寒彻。
>
> `- 教员`

#### **Markdown**

```markdown
> 横空出世，莽昆仑，阅尽人间春色。  
> 飞起玉龙三百万，搅得周天寒彻。
>
> `- 教员`
```

<!-- tabs:end -->

## Code

<!-- tabs:start -->

#### **效果**

This is `inline code`

```javascript
const add = (num1, num2) => num1 + num2;
const total = add(1, 2);

console.log(total); // 3
```

```html
<body>
  <p>Hello</p>
</body>
```

#### **Markdown**

````markdown
This is `inline code`

```javascript
const add = (num1, num2) => num1 + num2;
const total = add(1, 2);

console.log(total); // 3
```

```html
<body>
  <p>Hello</p>
</body>
```
````

<!-- tabs:end -->

## Notices

<!-- tabs:start -->

#### **效果**

!> **Important** 重要提醒

?> **Tip** 提示建议

#### **Markdown**

```markdown
!> **Important** 重要提醒

?> **Tip** 提示建议
```

<!-- tabs:end -->

## Tabs

<!-- tabs:start -->

#### **效果**

<!-- tabs:start -->

#### **English**

Hello!

#### **French**

Bonjour!

#### **Italian**

Ciao!

<!-- tabs:end -->

### **MarkDown**

```markdown
<!-- tabs:start -->

#### **English**

Hello!

#### **French**

Bonjour!

#### **Italian**

Ciao!

<!-- tabs:end -->
```

<!-- tabs:end -->

## Tables

<!-- tabs:start -->

#### **效果**

| 表头A    |  表头B   |    表头C |
| :------- | :------: | -------: |
| 内容居左 | 内容居中 | 内容居右 |
| 内容居左 | 内容居中 | 内容居右 |

#### **Markdown**

```markdown
| 表头A    |  表头B   |    表头C |
| :------- | :------: | -------: |
| 内容居左 | 内容居中 | 内容居右 |
| 内容居左 | 内容居中 | 内容居右 |
```

<!-- tabs:end -->

## Keyboard

<!-- tabs:start -->

#### **效果**

<kbd>&uarr;</kbd> Arrow Up

<kbd>&darr;</kbd> Arrow Down

<kbd>&larr;</kbd> Arrow Left

<kbd>&rarr;</kbd> Arrow Right

<kbd>&#8682;</kbd> Caps Lock

<kbd>&#8984;</kbd> Command

#### **Markdown**

```markdown
<kbd>&uarr;</kbd> Arrow Up

<kbd>&darr;</kbd> Arrow Down

<kbd>&larr;</kbd> Arrow Left

<kbd>&rarr;</kbd> Arrow Right

<kbd>&#8682;</kbd> Caps Lock

<kbd>&#8984;</kbd> Command
```

<!-- tabs:end -->

## Horizontal Rule

<!-- tabs:start -->

#### **效果**

---

#### **Markdown**

```markdown
---
```

<!-- tabs:end -->

## Images

<!-- tabs:start -->

#### **效果**

Inline-style

![alt text](https://vitejs.cn/logo.svg "My Blog")

Reference-style

![alt text][logo]

[logo]:https://vitejs.cn/logo.svg "My Blog"

#### **Markdown**

```markdown
**Inline**

![alt text](https://vitejs.cn/logo.svg "My Blog")

**Reference**

![alt text][logo]

[logo]:https://vitejs.cn/logo.svg "My Blog"
```

<!-- tabs:end -->

## Emoji

A complete list is available here ===> [Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/)

<!-- tabs:start -->

#### **效果**

:bowtie:
:smile:
:laughing:
:blush:
:smiley:
:relaxed:
:smirk:
:heart_eyes:
:kissing_heart:
:kissing_closed_eyes:
:flushed:
:relieved:
:satisfied:
:grin:
:wink:
:stuck_out_tongue_winking_eye:
:stuck_out_tongue_closed_eyes:
:grinning:
:kissing:
:kissing_smiling_eyes:
:stuck_out_tongue:
:sleeping:
:worried:
:frowning:
:anguished:
:open_mouth:
:grimacing:
:confused:
:hushed:
:expressionless:
:unamused:
:sweat_smile:
:sweat:
:disappointed_relieved:
:weary:
:pensive:
:disappointed:
:confounded:
:fearful:
:cold_sweat:
:persevere:
:cry:
:sob:
:joy:
:astonished:
:scream:
:neckbeard:
:tired_face:
:angry:
:rage:
:triumph:
:sleepy:
:yum:
:mask:
:sunglasses:
:dizzy_face:
:imp:
:smiling_imp:
:neutral_face:
:no_mouth:
:innocent:
:alien:
:yellow_heart:
:blue_heart:
:purple_heart:
:heart:
:green_heart:
:broken_heart:
:heartbeat:
:heartpulse:
:two_hearts:
:revolving_hearts:
:cupid:
:sparkling_heart:
:sparkles:
:star:
:star2:

#### **Markdown**

```markdown
:bowtie:
:smile:
:laughing:
:blush:
:smiley:
:relaxed:
:smirk:
:heart_eyes:
:kissing_heart:
:kissing_closed_eyes:
:flushed:
:relieved:
:satisfied:
:grin:
:wink:
:stuck_out_tongue_winking_eye:
:stuck_out_tongue_closed_eyes:
:grinning:
:kissing:
:kissing_smiling_eyes:
:stuck_out_tongue:
:sleeping:
:worried:
:frowning:
:anguished:
:open_mouth:
:grimacing:
:confused:
:hushed:
:expressionless:
:unamused:
:sweat_smile:
:sweat:
:disappointed_relieved:
:weary:
:pensive:
:disappointed:
:confounded:
:fearful:
:cold_sweat:
:persevere:
:cry:
:sob:
:joy:
:astonished:
:scream:
:neckbeard:
:tired_face:
:angry:
:rage:
:triumph:
:sleepy:
:yum:
:mask:
:sunglasses:
:dizzy_face:
:imp:
:smiling_imp:
:neutral_face:
:no_mouth:
:innocent:
:alien:
:yellow_heart:
:blue_heart:
:purple_heart:
:heart:
:green_heart:
:broken_heart:
:heartbeat:
:heartpulse:
:two_hearts:
:revolving_hearts:
:cupid:
:sparkling_heart:
:sparkles:
:star:
:star2:
```

<!-- tabs:end -->

## Alerts

<!-- tabs:start -->

#### **效果**

> [!NOTE]
> An alert of type 'note' using global style 'callout'.

> [!TIP]
> An alert of type 'tip' using global style 'callout'.

> [!WARNING]
> An alert of type 'warning' using global style 'callout'.

> [!ATTENTION]
> An alert of type 'attention' using global style 'callout'.

#### **Markdown**

```markdown
> [!NOTE]
> An alert of type 'note' using global style 'callout'.

> [!TIP]
> An alert of type 'tip' using global style 'callout'.

> [!WARNING]
> An alert of type 'warning' using global style 'callout'.

> [!ATTENTION]
> An alert of type 'attention' using global style 'callout'.
```

<!-- tabs:end -->

## Summary

<!-- tabs:start -->

#### **效果**

<details>


<summary>我的列表(点击打开/折叠)</summary>

- 123
- abc

</details>

#### **Markdown**

```markdown
<details>

<summary>我的列表(点击打开/折叠)</summary>

- 123
- abc

</details>
```

<!-- tabs:end -->


<p style="font-size:30px ;font-weight: bolder">References</p>

- [markdown教程](https://www.runoob.com/markdown/md-tutorial.html)
- [markdown用法](https://docs-1257794070.cos-website.ap-nanjing.myqcloud.com/#/markdown/)