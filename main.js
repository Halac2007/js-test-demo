(() => {
  const fastdom = {
    reads: [],
    writes: [],
    raf: window.requestAnimationFrame.bind(window),
    schedule() {
      if (!this.scheduled) {
        this.scheduled = true;
        this.raf(() => this.flush());
      }
    },
    flush() {
      this.runTasks(this.reads);
      this.runTasks(this.writes);
      this.scheduled = false;
      if (this.reads.length || this.writes.length) this.schedule();
    },
    runTasks(tasks) {
      tasks.forEach((task) => task());
    },
    measure(task) {
      this.reads.push(task);
      this.schedule();
    },
    mutate(task) {
      this.writes.push(task);
      this.schedule();
    },
  };

  const adjustFocalPoints = () => {
    fastdom.measure(() => {
      const orientation = window.innerWidth > window.innerHeight ? "landscape" : "portrait";
      fastdom.mutate(() => {
        document.querySelectorAll("[data-landscape-focal]").forEach((element) => {
          const focal = element.dataset[`${orientation}Focal`];
          if (focal) {
            const img = element.tagName === "PICTURE" ? element.querySelector("img") : element;
            if (img) img.style.objectPosition = focal;
          }
        });
      });
    });
  };

  const initInstantImage = (container) => {
    const img = container.querySelector("[data-instant-image-real-img]");
    const onLoad = () => {
      container.classList.add("InstantImage--isLoaded");
    };
    img.complete ? onLoad() : img.addEventListener("load", onLoad, { once: true });
  };

  const detectDevice = () => {
    const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isiFrame = window.top !== window;
    if (isiOS && isiFrame) {
      document.documentElement.classList.add("DeviceDetect--isiOS", "DeviceDetect--isiFrame");
    }
  };

  const initYouTubeAPI = () => {
    if (window._onYouTubeIframeAPIReadyWasReplaced) return;
    const original = window.onYouTubeIframeAPIReady;
    const handlers = original ? [original] : [];
    Object.defineProperty(window, "onYouTubeIframeAPIReady", {
      set(handler) {
        handlers.push(handler);
      },
      get() {
        return () => handlers.forEach((handler) => handler());
      },
    });
    window._onYouTubeIframeAPIReadyWasReplaced = true;
  };

  // Initialize
  detectDevice();
  window.addEventListener("resize", adjustFocalPoints, { passive: true });
  adjustFocalPoints();
  window.Shorthand = { initInstantImage, initFocalPointPictures: adjustFocalPoints };
  initYouTubeAPI();
})();
