import {
    trigger,
    transition,
    style,
    state,
    query,
    group,
    animateChild,
    animate,
    animation,
    stagger,
    keyframes,
  } from '@angular/animations';


export const fade = trigger('fade', [

  state('void', style({
    transform: 'translate(-100px, 0)'
  })),
  transition(':enter, :leave', [
    animate(1000)
  ])
]);

export const fadeF = trigger('fadeF', [
  transition(':enter', [
    style({transform: 'translateX(50%)', opacity: 0}),
    animate('500ms 500ms ease-in-out', style({transform: 'translateX(0)', opacity: 1}))
  ]),
  transition(':leave', [
    style({transform: 'translateX(0)', opacity: 1}),
    animate('500ms ease-in-out', style({transform: 'translateX(50%)', opacity: 0}))
  ])
]);

export const fadeB = trigger('fadeB', [
  transition(':enter', [
    style({transform: 'translateX(-50%)', opacity: 0}),
    animate('500ms 500ms ease-in-out', style({transform: 'translateX(0)', opacity: 1}))
  ]),
  transition(':leave', [
    style({transform: 'translateX(0)', opacity: 1}),
    animate('500ms ease-in-out', style({transform: 'translateX(-50%)', opacity: 0}))
  ])
]);

export const fadeFbtn = trigger('fadeFbtn', [
  transition(':enter', [
    style({transform: 'translateX(50%)', opacity: 0}),
    animate('500ms ease-in-out', style({transform: 'translateX(0)', opacity: 1}))
  ]),
  transition(':leave', [
    style({transform: 'translateX(0)', opacity: 1}),
    animate('500ms ease-in-out', style({transform: 'translateX(50%)', opacity: 0}))
  ])
]);

export const fadeBbtn = trigger('fadeBbtn', [
  transition(':enter', [
    style({transform: 'translateX(-50%)', opacity: 0}),
    animate('500ms 500ms ease-in-out', style({transform: 'translateX(0)', opacity: 1}))
  ]),
  transition(':leave', [
    style({transform: 'translateX(0)', opacity: 1}),
    animate('500ms ease-in-out', style({transform: 'translateX(-50%)', opacity: 0}))
  ])
]);