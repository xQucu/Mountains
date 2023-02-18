'use strict';
$(function () {
  $('body').prepend(` <!-- Menu -->
    <nav id="main-menu" class="navbar navbar-expand-lg fixed-top" data-aos="fade-down" data-aos-delay="500" data-aos-duration="3000">
      <div class="container">
        <a class="navbar-brand" href="index.html"
          >World's highest peaks</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
          <ul class="navbar-nav ml-auto box-hook align-items-center ">
            <li class="nav-item">
              <a
                class="nav-link"
                href="m1.html"
                title="The highest mountain peak in the world"
                >Mount Everest</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="m2.html"
                title="The second highest mountain peak in the world"
                >K2</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="m3.html"
                title="The third highest mountain peak in the world"
                >Kangchenjunga</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="m4.html"
                title="The fourth highest mountain peak in the world"
                >Lhotse</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="m5.html"
                title="The fifth highest mountain peak in the world"
                >Makalu</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="m6.html"
                title="The sixth highest mountain peak in the world"
                >Cho Oyu</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="m7.html"
                title="The seventh highest mountain peak in the world"
                >Dhaulagiri</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="m8.html"
                title="The eighth highest mountain peak in the world"
                >Manaslu</a
              >
            </li>
            <li class="nav-item visibility-toggler-box"></li>
          </ul>
        </div>
      </div>
    </nav>`);
  $('body').append(`<!-- footer -->
    <footer id="main-footer" class="py-5 bg-dark text-white">
      <div class="container">
        <div class="row">
          <div class="col-md-4" data-aos="flip-left">
            <strong>Contact</strong>
            <p>
              <i class="bi bi-envelope"></i> Adrian Kucyk<br />
              <i class="bi bi-telephone"></i> Kuba Kowalski
            </p>
          </div>
          <div class="col-md-4" data-aos="flip-left" data-aos-delay="400">
            <strong>Links</strong>
            <ul class="list-unstyled">
              <li><a href="index.html">Main page</a></li>
              <li><a href="m1.html">Mount Everest</a></li>
              <li><a href="m2.html">K2</a></li>
              <li><a href="m3.html">Kangchenjunga</a></li>
              <li><a href="m4.html">Lhotse</a></li>
              <li><a href="m5.html">Makalu</a></li>
              <li><a href="m6.html">Cho Oyu</a></li>
              <li><a href="m7.html">Dhaulagiri</a></li>
              <li><a href="m8.html">Manaslu</a></li>
            </ul>
          </div>
          <div class="col-md-4" data-aos="flip-left" data-aos-delay="800">
            <strong>About us</strong>
            <p>
            Just us, nothing special
            </p>
          </div>
        </div>
      </div>
    </footer>`);
  $("nav a:contains('" + document.title + "')").addClass('active');
  AOS.init();
});
