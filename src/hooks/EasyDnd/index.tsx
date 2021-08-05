/* eslint no-use-before-define: "off" */
import React, { useContext, createContext, useCallback, useState } from 'react';

interface IContext {
  registerDraggable(ref: HTMLDivElement): void;
  registerDropzone(ref: HTMLDivElement): void;
}

const DndContext = createContext<IContext>({} as IContext);

/** Event Cards */
function dragStart(event) {
  const eventX = event.clientX - this.offsetLeft;
  const eventY = event.clientY - this.offsetTop;

  const clone = this.cloneNode(true);
  clone.id = 'element-dragging';
  clone.style.display = 'block';
  clone.style.width = `${this.offsetWidth}px`;

  document.body.appendChild(clone);

  event.dataTransfer.setDragImage(clone, eventX, eventY);

  this.classList.add('dragging');
  this.setAttribute('dragging', '');
}

function cardDragOver(event) {
  if (this.hasAttribute('dragging')) {
    return;
  }

  const ulElement = this.closest('ul');
  const elementHalf = this.offsetHeight / 2;
  const elementBeingDragged = document.querySelector('.dragging');

  if (event.layerY < elementHalf) {
    ulElement.insertBefore(elementBeingDragged, this);
    return;
  }

  ulElement.insertBefore(elementBeingDragged, this.nextSibling);
}

function cardDrop() {
  document.getElementById('element-dragging').remove();
  const elementBeingDragged = document.querySelector('.dragging');

  elementBeingDragged.classList.remove('dragging');
  elementBeingDragged.removeAttribute('dragging');
}

/** Event Lists */
function ListDragover(event) {
  if (this.hasAttribute('dragging')) {
    return;
  }

  const elementBeingDragged = document.querySelector('.dragging');
  const targetElement = event.target.closest('[draggable]');
  const ulElement = this.querySelector('ul');

  if (targetElement) {
    return;
  }

  ulElement.appendChild(elementBeingDragged);
}

export const DndProvider = ({ children }) => {
  const registerDraggable = useCallback(ref => {
    ref.addEventListener('dragstart', dragStart);
    ref.addEventListener('dragover', cardDragOver);
    ref.addEventListener('dragend', cardDrop);
  }, []);

  const registerDropzone = useCallback(ref => {
    ref.addEventListener('dragover', ListDragover);
  }, []);

  return (
    <DndContext.Provider value={{ registerDraggable, registerDropzone }}>
      {children}
    </DndContext.Provider>
  );
};

export const useDnd = () => {
  const context = useContext(DndContext);

  if (!context) {
    throw new Error('Error start dnd funcions!');
  }

  return context;
};
