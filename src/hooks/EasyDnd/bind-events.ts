export type EventBinding = {
  eventName: string;
  fn: (event: Event) => any;
};

export default function bindEvents(
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
    console.log('chamou o unbind');

    unbindings.forEach(unbind => {
      unbind();
    });
  };
}
