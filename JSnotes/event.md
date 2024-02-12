# event 
Events are things that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs.

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
console.log("event success")
});
```

## Removing listeners
If you've added an event handler using addEventListener(), you can remove it again using the removeEventListener() method. 
`btn.removeEventListener("click", changeBackground);`
Event handlers can also be removed by passing an AbortSignal to addEventListener() and then later calling abort() on the controller owning the AbortSignal. For example, to add an event handler that we can remove with an AbortSignal:
```js
const controller = new AbortController();

btn.addEventListener("click",
  () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal } // pass an AbortSignal to this handler
);
```

Then the event handler created by the code above can be removed like this:

`controller.abort(); // removes any/all event handlers associated with this controller`

## event object 
Sometimes, inside an event handler function, you'll see a parameter specified with a name such as event, evt, or e. This is called the event object, and it is automatically passed to event handlers to provide extra features and information.
```js
const btn = document.querySelector("button");

function bgChange(e) {
  e.target.style.backgroundColor = red;
  console.log(e);
}
btn.addEventListener("click", bgChange);

btn.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});
```

## Preventing default behavior
Sometimes, you'll come across a situation where you want to prevent an event from doing what it does by default.

```js
form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
  e.preventDefault();
}
```

## Event bubbling
Event bubbling describes how the browser handles events targeted at nested elements.

### Fixing the problem with stopPropagation()
As we saw in the last section, event bubbling can sometimes create problems, but there is a way to prevent it. The Event object has a function available on it called stopPropagation() which, when called inside an event handler, prevents the event from bubbling up to any other elements.
```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", (event) => {
  event.stopPropagation();
  video.play();
});

box.addEventListener("click", () => box.classList.add("hidden"));
```

## Event capture
An alternative form of event propagation is event capture. This is like event bubbling but the order is reversed: so instead of the event firing first on the innermost element targeted, and then on successively less nested elements, the event fires first on the least nested element, and then on successively more nested elements, until the target is reached

Event capture is disabled by default. To enable it you have to pass the capture option in addEventListener().

`document.body.addEventListener("click", handleClick, { capture: true });`

Event delegation
In the last section, we looked at a problem caused by event bubbling and how to fix it. Event bubbling isn't just annoying, though: it can be very useful. In particular, it enables event delegation. In this practice, when we want some code to run when the user interacts with any one of a large number of child elements, we set the event listener on their parent and have events that happen on them bubble up to their parent rather than having to set the event listener on every child individually.

```html
<div id="container">
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
</div>
```

```js
function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});
```

