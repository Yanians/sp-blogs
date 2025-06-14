"use strict";
{ /* <div class="page">
  <header role="banner">
    <div class="title" id="id_website_title">
      Mythical University
    </div>
    <div class="tagline">
      Using a Tree widget pattern for navigation links
    </div>
  </header>
  <div class="body">
    <nav aria-label="Mythical University">
      <ul class="treeview-navigation"
          role="tree"
          aria-label="Mythical University">
        <li role="none">
          <a role="treeitem"
             href="#home"
             aria-current="page">
            <span class="label">
              Home
            </span>
          </a>
        </li>
        <li role="none">
          <a role="treeitem"
             aria-expanded="false"
             aria-owns="id-about-subtree"
             href="#about">
            <span class="label">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="13"
                     height="10"
                     viewBox="0 0 13 10">
                  <polygon points="2 1, 12 1, 7 9"></polygon>
                </svg>
              </span>
              About
            </span>
          </a>
          <ul id="id-about-subtree"
              role="group"
              aria-label="About">
            <li role="none">
              <a role="treeitem" href="#overview">
                <span class="label">
                  Overview
                </span>
              </a>
            </li>
            <li role="none">
              <a role="treeitem" href="#adminstration">
                <span class="label">
                  Administration
                </span>
              </a>
            </li>
            <li role="none">
              <a role="treeitem"
                 aria-expanded="false"
                 aria-owns="id-facts-subtree"
                 href="#facts">
                <span class="label">
                  <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="13"
                         height="10"
                         viewBox="0 0 13 10">
                      <polygon points="2 1, 12 1, 7 9"></polygon>
                    </svg>
                  </span>
                  Facts
                </span>
              </a>
              <ul id="id-facts-subtree"
                  role="group"
                  aria-label="Facts">
                <li role="none">
                  <a role="treeitem" href="#history">
                    <span class="label">
                      History
                    </span>
                  </a>
                </li>
                <li role="none">
                  <a role="treeitem" href="#current-statistics">
                    <span class="label">
                      Current Statistics
                    </span>
                  </a>
                </li>
                <li role="none">
                  <a role="treeitem" href="#awards">
                    <span class="label">
                      Awards
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li role="none">
              <a role="treeitem"
                 aria-expanded="false"
                 aria-owns="id-campus-tours-subtree"
                 href="#campus-tours">
                <span class="label">
                  <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="13"
                         height="10"
                         viewBox="0 0 13 10">
                      <polygon points="2 1, 12 1, 7 9"></polygon>
                    </svg>
                  </span>
                  Campus Tours
                </span>
              </a>
              <ul id="id-campus-tours-subtree"
                  role="group"
                  aria-label="Campus Tours">
                <li role="none">
                  <a role="treeitem" href="#for-prospective-students">
                    <span class="label">
                      For Prospective Students
                    </span>
                  </a>
                </li>
                <li role="none">
                  <a role="treeitem" href="#for-alumni">
                    <span class="label">
                      For Alumni
                    </span>
                  </a>
                </li>
                <li role="none">
                  <a role="treeitem" href="#for-visitors">
                    <span class="label">
                      For Visitors
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li role="none">
          <a role="treeitem"
             aria-expanded="false"
             aria-owns="id-admissions-subtree"
             href="#admissions">
            <span class="label">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="13"
                     height="10"
                     viewBox="0 0 13 10">
                  <polygon points="2 1, 12 1, 7 9"></polygon>
                </svg>
              </span>
              Admissions
            </span>
          </a>
          <ul id="id-admissions-subtree"
              role="group"
              aria-label="Admissions">
            <li role="none">
              <a role="treeitem" href="#apply">
                <span class="label">
                  Apply
                </span>
              </a>
            </li>
            <li role="none">
              <a role="treeitem"
                 aria-expanded="false"
                 aria-owns="id-tuition-subtree"
                 href="#tuition">
                <span class="label">
                  <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="13"
                         height="10"
                         viewBox="0 0 13 10">
                      <polygon points="2 1, 12 1, 7 9"></polygon>
                    </svg>
                  </span>
                  Tuition
                </span>
              </a>
              <ul id="id-tuition-subtree"
                  role="group"
                  aria-label="Tuition">
                <li role="none">
                  <a role="treeitem" href="#undergraduate">
                    <span class="label">
                      Undergraduate
                    </span>
                  </a>
                </li>
                <li role="none">
                  <a role="treeitem" href="#graduate">
                    <span class="label">
                      Graduate
                    </span>
                  </a>
                </li>
                <li role="none">
                  <a role="treeitem" href="#professional-schools">
                    <span class="label">
                      Professional Schools
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li role="none">
              <a role="treeitem" href="#signup">
                <span class="label">
                  Sign Up
                </span>
              </a>
            </li>
            <li role="none">
              <a role="treeitem" href="#visit">
                <span class="label">
                  Visit
                </span>
              </a>
            </li>
            <li role="none">
              <a role="treeitem" href="#photo-tour">
                <span class="label">
                  Photo Tour
                </span>
              </a>
            </li>
            <li role="none">
              <a role="treeitem" href="#connect">
                <span class="label">
                  Connect
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li role="none">
          <a role="treeitem"
             aria-expanded="false"
             aria-owns="id-academics-subtree"
             href="#academics">
            <span class="label">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="13"
                     height="10"
                     viewBox="0 0 13 10">
                  <polygon points="2 1, 12 1, 7 9"></polygon>
                </svg>
              </span>
              Academics
            </span>
          </a>
          <ul id="id-academics-subtree"
              role="group"
              aria-label="Academics">
            <li role="none">
              <a role="treeitem" href="#colleges-and-schools">
                <span class="label">
                  Colleges & Schools
                </span>
              </a>
            </li>
            <li role="none">
              <a role="treeitem" href="#programs-of-study">
                <span class="label">
                  Programs of Study
                </span>
              </a>
            </li>
            <li role="none">
              <a role="treeitem" href="#honors-programs">
                <span class="label">
                  Honors Programs
                </span>
              </a>
            </li>
            <li role="none">
              <a role="treeitem" href="#online-courses">
                <span class="label">
                  Online Courses
                </span>
              </a>
            </li>
            <li role="none">
              <a role="treeitem" href="#course-explorer">
                <span class="label">
                  Course Explorer
                </span>
              </a>
            </li>
            <li role="none">
              <a role="treeitem" href="#register-for-classes">
                <span class="label">
                  Register for Classes
                </span>
              </a>
            </li>
            <li role="none">
              <a role="treeitem" href="#academic-calendar">
                <span class="label">
                  Academic Calendar
                </span>
              </a>
            </li>
            <li role="none">
              <a role="treeitem" href="#tanscripts">
                <span class="label">
                  Transcripts
                </span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <section class="main" aria-labelledby="id_website_title id_page_title">
      <h1 class="page_title" id="id_page_title">
        Mythical University
      </h1>
      <div class="content">
        <p></p>
      </div>
    </section>
  </div>
  <footer role="contentinfo">
    Mythical University footer information
  </footer>
</div>
 */
}
