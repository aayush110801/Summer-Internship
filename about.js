
window.addEventListener("scroll", progressAll);

function progressAll()
 {
  const triggerProgress = (window.innerHeight / 2) * 2;
  console.log(triggerProgress);
 const progressTop = document.getElementById("about");

  const progressStart = progressTop.getBoundingClientRect().top;
  console.log(progressStart);
  if (progressStart < triggerProgress)
   {
    // html

    const progress = document.getElementById("progressDoneHtml");
    progress.style.width = progress.getAttribute("data-done");
    progress.style.opacity = 1;

    // Css

    const progressCss = document.getElementById("progressDoneCss");
    progressCss.style.width = progressCss.getAttribute("data-done");
    progressCss.style.opacity = 1;

    // BOOTSTRAP

    const progressBootstrap = document.getElementById("progressDoneBootstrap");
    progressBootstrap.style.width = progressBootstrap.getAttribute("data-done");
    progressBootstrap.style.opacity = 1;

    // Sass

     const progressSass = document.getElementById("progressDoneSass");
     progressSass.style.width = progressSass.getAttribute("data-done");
     progressSass.style.opacity = 1;

    // Javascript

    const progressJavscript = document.getElementById("progressDoneJavascript");
    progressJavscript.style.width = progressJavscript.getAttribute("data-done");
    progressJavscript.style.opacity = 1;

    // REACTJS

    const progressReactJS = document.getElementById("progressDoneReact");
    progressReact.style.width = progressReactJS.getAttribute("data-done");
    progressReactJS.style.opacity = 1;
  }
}
// increment counter
const counters = document.querySelectorAll(".counter");
counters.forEach(function (counter) {
  counter.innerText = "20";
  updatecounter();

  function updatecounter() {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 1000;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updatecounter, 10);
    } else {
      counter.innerText = target;
    }
  }
});