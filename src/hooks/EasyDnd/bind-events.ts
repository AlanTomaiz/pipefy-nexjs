export type EventBinding = {
  eventName: string;
  fn: (event: Event) => any;
};

export default function bindEvent(
  elem: HTMLElement | Window,
  bindings: EventBinding[],
): () => void {
  const unbindings = bindings.map(bind => {
    elem.addEventListener(bind.eventName, bind.fn);

    return function unbind() {
      elem.removeEventListener(bind.eventName, bind.fn);
    };
  });

  return function unbindAll() {
    unbindings.forEach(unbind => {
      unbind();
    });
  };
}
