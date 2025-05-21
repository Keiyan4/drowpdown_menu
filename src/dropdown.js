export default function dropDownMenu() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const toggleBtn = dropdown.querySelector(".dropdown-toggle");
    const options = dropdown.querySelector(".dropdown-options");
    const trigger = dropdown.dataset.trigger || "click";

    const toggle = () => options.classList.toggle("visible");
    const hide = () => options.classList.remove("visible");
    const show = () => options.classList.add("visible");

    if (trigger === "click") {
      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggle();
      });
      document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) hide();
      });
    } else if (trigger === "hover") {
      toggleBtn.addEventListener("mouseenter", show);
      toggleBtn.addEventListener("mouseleave", hide);
    }
  });
}
