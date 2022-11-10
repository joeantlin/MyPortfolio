import { Component } from '@angular/core';
import { fade, fadeF, fadeB, fadeFbtn, fadeBbtn } from './Animations';
declare var $: any;
// import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    fade,
    fadeF,
    fadeB,
    fadeFbtn,
    fadeBbtn
  ]
})
export class AppComponent {
  public show: boolean;
  public title = 'public';
  public currentYear: number = new Date().getFullYear();


  constructor(
    // private _route: ActivatedRoute,
    // private _router: Router
  ) {}

  ngOnInit() {
    this.show = true;

    // window.addEventListener("load", function() {
    //     const loader = this.document.querySelector(".preloader");
    //     loader.className += " hide";
    // });

    $(document).ready(() => {
      $(".next").click(function() {
        var $target = $('.project.active').next('.project');
        if ($target.length == 0)
          $target = $('.project:first');
        $('html, body').animate({
          scrollTop: $target.offset().top
        }, 10);
      
        $('.active').removeClass('active');
        $target.addClass('active');
      });
      
    });

    

    var scroll = window.requestAnimationFrame || 
    function(callback) {
      window.setTimeout(callback, 1000/60)
    };

    var backgroundChange = document.querySelectorAll('.logo');

    function changeB() {
      backgroundChange.forEach(function(element){
        if (isAnyPartOfElementInViewport(element)) {
          // document.body.style.backgroundColor = 'rgba(53, 53, 53, 1)'
          document.body.style.backgroundColor = 'rgba(73, 73, 73, 1)'
        } else {
          // document.body.style.backgroundColor = 'rgba(83, 83, 83, 1)'
          document.body.style.backgroundColor = 'rgba(106, 108, 110, 1)'
        }
      });
      scroll(changeB)
    }
    changeB();
  
    function isAnyPartOfElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
      const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
      const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
      return (vertInView && horInView);
    }
  }
  
  
  
  showFront(): void {
    var fullpage = document.getElementById("full");
    var frontpage = document.getElementById("front");
    if (this.show == true){
      this.show = false;
    //   fullpage.style.color = "white";
    //   frontpage.style.color = "rgba(41, 171, 226, 1)";
    //   setTimeout(ifOne, 1500)
    } else {
      this.show = true;
  
    }
  }
}
