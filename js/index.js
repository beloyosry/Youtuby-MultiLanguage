let video = document.querySelector(".video-section");
// Load Theme From Local Storage When Refresh
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light");
  }
  let localData = localStorage.getItem("theme");
  if (localStorage.getItem("attStatus") == null) {
    localStorage.setItem("attStatus", "light");
  }
  let htmlAttr = localStorage.getItem("attStatus");

  if (localData === "dark") {
    if (htmlAttr === "dark") {
      $("html").attr("data-bs-theme", function (index, attr) {
        return attr == "light" ? "dark" : "light";
      });
    }
    $("#icon").attr("src", "img/sun.png");
    $("#icon-sidebar").attr("src", "img/sun.png");
    $("body").addClass("bg-dark");
    $("nav").removeClass("bg-light");
    $("nav").addClass("bg-dark");
    $(".sidebar").removeClass("bg-light");
    $(".sidebar").addClass("bg-dark");
    $(".card-mode").removeClass("bg-light");
    $(".card-mode").addClass("bg-dark");
    $("p").removeClass("text-dark");
    $("p").addClass("text-light");
    $("a").removeClass("text-dark");
    $("a").addClass("text-light");
    $("span").removeClass("text-dark");
    $("span").addClass("text-light");
    $(".form-control").removeClass("bg-light");
    $(".form-control").addClass("bg-dark");
    if ($(".login-text").hasClass("text-black-50")) {
      $(".login-text").removeClass("text-black-50");
      $(".login-text").addClass("text-white-50");
    } else {
      $(".login-text").removeClass("text-white-50");
      $(".login-text").addClass("text-black-50");
    }
    $(".dropdown-toggle").toggleClass("btn-dark");
    if (video.classList.contains("bg-dark")) {
      video.classList.remove("bg-dark");
      video.classList.add("bg-white");
    } else if (video.classList.contains("bg-white")) {
      video.classList.remove("bg-white");
      video.classList.add("bg-dark");
    }
  } else if (localData === "light") {
    $("#icon").attr("src", "img/moon.png");
    $("#icon-sidebar").attr("src", "img/moon.png");
    $("nav").removeClass("bg-dark");
    $("nav").addClass("bg-light");
    $(".sidebar").removeClass("bg-dark");
    $(".sidebar").addClass("bg-light");
    $(".card-mode").removeClass("bg-dark");
    $(".card-mode").addClass("bg-light");
    $("p").removeClass("text-light");
    $("p").addClass("text-dark");
    $("a").removeClass("text-light");
    $("a").addClass("text-dark");
    $("span").removeClass("text-light");
    $("span").addClass("text-dark");
    $(".form-control").removeClass("bg-dark");
    $(".form-control").addClass("bg-light");
  }
});

$(document).ready(function () {
  $("a").addClass("text-dark");
  $("span").addClass("text-dark");
  // Add Active Class To First Item In Navbar List
  $(".first-list-element").addClass("active");
  // Add Active Class To Navbar List
  $(".nav-item").click(function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });
  //Add Toggle Class To Wrap Side Menu
  $("#toggler").click(function () {
    $("#wrap").toggleClass("toggled");
    var right = $(".sidebar-right").css("right");
    var left = $(".sidebar-left").css("left");
    $(".sidebar-left").css({ left: "unset" });
    $(".sidebar-right").css({ right: "unset" });

    if (document.dir === "rtl") {
      $("#sidebar").removeClass("sidebar-left");
      $("#sidebar").addClass("sidebar-right");

      if (right === "0px") {
        $(".sidebar-right").css({ right: "-17rem" });
        $(".layer").fadeOut();
        // Blur Layer Code
        $(".layer").click(function () {
          $(".sidebar-right").css({ right: "-17rem" });
          $(".layer").fadeOut();
        });
      } else {
        $(".sidebar-right").css({ right: "0" });
        $(".layer").fadeIn();
      }
    } else if (document.dir === "ltr") {
      $("#sidebar").removeClass("sidebar-right");
      $("#sidebar").addClass("sidebar-left");

      if (left === "0px") {
        $(".sidebar-left").css({ left: "-17rem" });
        $(".layer").fadeOut();
      } else {
        $(".sidebar-left").css({ left: "0" });
        $(".layer").fadeIn();
      }
      // Blur Layer Code
      $(".layer").click(function () {
        $(".sidebar-left").css({ left: "-17rem" });
        $(".layer").fadeOut();
      });
    }
  });
  // Search Bar Showing Up
  $(".search-icon").click(function () {
    $(".search-input").slideToggle("slow");
  });
  // Search Bar With Enter Confirmation
  $(".search-input").keyup(function (event) {
    if (event.which === 13) {
      window.location.href = "search.html";
    }
  });

  // Dark Mode Toggle Button
  let attrDark = $("html").attr("data-bs-theme", "dark");
  let attrLight = $("html").attr("data-bs-theme", "light");
  $(".sidebar").addClass("bg-light");
  $("#icon").click(function () {
    $("html").attr("data-bs-theme", function (index, attr) {
      return attr == "light" ? "dark" : "light";
    });
    if (attrDark) {
      if ($(".sidebar").hasClass("bg-light")) {
        $(".sidebar").addClass("bg-dark");
        $(".sidebar").removeClass("bg-light");
      } else {
        $(".sidebar").addClass("bg-light");
        $(".sidebar").removeClass("bg-dark");
      }
    } else if (attrLight) {
      if ($(".sidebar").hasClass("bg-dark")) {
        $(".sidebar").addClass("bg-light");
        $(".sidebar").removeClass("bg-dark");
      } else {
        $(".sidebar").addClass("bg-dark");
        $(".sidebar").removeClass("bg-light");
      }
    }
    $("body").toggleClass("bg-dark");
    $("nav").toggleClass("bg-dark");
    if ($("body").hasClass("bg-dark")) {
      localStorage.setItem("theme", "dark");
      localStorage.setItem("attStatus", "dark");
      $("#icon").attr("src", "img/sun.png");
    } else {
      localStorage.setItem("theme", "light");
      localStorage.setItem("attStatus", "light");
      $("#icon").attr("src", "img/moon.png");
    }
    if ($("nav").hasClass("bg-light")) {
      $("nav").removeClass("bg-light");
    } else {
      $("nav").addClass("bg-light");
    }

    if ($(".card-mode").hasClass("bg-light")) {
      $(".card-mode").removeClass("bg-light");
      $(".card-mode").addClass("bg-dark");
    } else {
      $(".card-mode").removeClass("bg-dark");
      $(".card-mode").addClass("bg-light");
    }
    $("p").addClass("text-dark");
    if ($("p").hasClass("text-light")) {
      $("p").removeClass("text-light");
      $("p").addClass("text-dark");
    } else {
      $("p").removeClass("text-dark");
      $("p").addClass("text-light");
    }
    $("a").addClass("text-dark");
    if ($("a").hasClass("text-light")) {
      $("a").removeClass("text-light");
      $("a").addClass("text-dark");
    } else {
      $("a").removeClass("text-dark");
      $("a").addClass("text-light");
    }
    $("span").addClass("text-dark");
    if ($("span").hasClass("text-light")) {
      $("span").removeClass("text-light");
      $("span").addClass("text-dark");
    } else {
      $("span").removeClass("text-dark");
      $("span").addClass("text-light");
    }
    if ($(".form-control").hasClass("bg-light")) {
      $(".form-control").removeClass("bg-light");
      $(".form-control").addClass("bg-dark");
    } else {
      $(".form-control").removeClass("bg-dark");
      $(".form-control").addClass("bg-light");
    }
    if ($(".login-text").hasClass("text-black-50")) {
      $(".login-text").removeClass("text-black-50");
      $(".login-text").addClass("text-white-50");
    } else {
      $(".login-text").removeClass("text-white-50");
      $(".login-text").addClass("text-black-50");
    }
    $(".dropdown-toggle").toggleClass("btn-dark");

    if (video.classList.contains("bg-dark")) {
      video.classList.remove("bg-dark");
      video.classList.add("bg-white");
    } else if (video.classList.contains("bg-white")) {
      video.classList.remove("bg-white");
      video.classList.add("bg-dark");
    }
  });
  $("#icon-sidebar").click(function () {
    $("html").attr("data-bs-theme", function (index, attr) {
      return attr == "light" ? "dark" : "light";
    });
    if (attrDark) {
      if ($(".sidebar").hasClass("bg-light")) {
        $(".sidebar").addClass("bg-dark");
        $(".sidebar").removeClass("bg-light");
      } else {
        $(".sidebar").addClass("bg-light");
        $(".sidebar").removeClass("bg-dark");
      }
    } else if (attrLight) {
      if ($(".sidebar").hasClass("bg-dark")) {
        $(".sidebar").addClass("bg-light");
        $(".sidebar").removeClass("bg-dark");
      } else {
        $(".sidebar").addClass("bg-dark");
        $(".sidebar").removeClass("bg-light");
      }
    }
    $("body").toggleClass("bg-dark");
    $("nav").toggleClass("bg-dark");
    if ($("body").hasClass("bg-dark")) {
      localStorage.setItem("theme", "dark");
      localStorage.setItem("attStatus", "dark");
      $("#icon-sidebar").attr("src", "img/sun.png");
    } else {
      localStorage.setItem("theme", "light");
      localStorage.setItem("attStatus", "light");
      $("#icon-sidebar").attr("src", "img/moon.png");
    }
    if ($("nav").hasClass("bg-light")) {
      $("nav").removeClass("bg-light");
    } else {
      $("nav").addClass("bg-light");
    }

    if ($(".card-mode").hasClass("bg-light")) {
      $(".card-mode").removeClass("bg-light");
      $(".card-mode").addClass("bg-dark");
    } else {
      $(".card-mode").removeClass("bg-dark");
      $(".card-mode").addClass("bg-light");
    }
    $("p").addClass("text-dark");
    if ($("p").hasClass("text-light")) {
      $("p").removeClass("text-light");
      $("p").addClass("text-dark");
    } else {
      $("p").removeClass("text-dark");
      $("p").addClass("text-light");
    }
    $("a").addClass("text-dark");
    if ($("a").hasClass("text-light")) {
      $("a").removeClass("text-light");
      $("a").addClass("text-dark");
    } else {
      $("a").removeClass("text-dark");
      $("a").addClass("text-light");
    }
    $("span").addClass("text-dark");
    if ($("span").hasClass("text-light")) {
      $("span").removeClass("text-light");
      $("span").addClass("text-dark");
    } else {
      $("span").removeClass("text-dark");
      $("span").addClass("text-light");
    }
    if ($(".form-control").hasClass("bg-light")) {
      $(".form-control").removeClass("bg-light");
      $(".form-control").addClass("bg-dark");
    } else {
      $(".form-control").removeClass("bg-dark");
      $(".form-control").addClass("bg-light");
    }
    if ($(".login-text").hasClass("text-black-50")) {
      $(".login-text").removeClass("text-black-50");
      $(".login-text").addClass("text-white-50");
    } else {
      $(".login-text").removeClass("text-white-50");
      $(".login-text").addClass("text-black-50");
    }
    $(".dropdown-toggle").toggleClass("btn-dark");

    if (video.classList.contains("bg-dark")) {
      video.classList.remove("bg-dark");
      video.classList.add("bg-white");
    } else if (video.classList.contains("bg-white")) {
      video.classList.remove("bg-white");
      video.classList.add("bg-dark");
    }
  });
});

const translations = {
  en: {
    youtuby: "Youtuby",
    suggested: "Suggested Videos",
    recently: "Recently Uploaded",
    trending: "Trending",
    arabic: "عربي",
    english: "english",
    search: "Search",
    login: "Login",
    view: "3K views",
    date: "3 Months ago",
    loginTitle: "Login",
    email: "Email:",
    password: "Password:",
    forgotPass: "Forgot Password?",
    newAcc: "New Account",
    loginBtn: "Login",
    home: "Home",
    myVideos: "My Videos",
    history: "History",
    subscriptions: "Subscriptions",
    movies: "Movies",
    games: "Games",
    fashion: "Fashion",
    education: "Education",
    settings: "Settings",
    help: "Help",
    info: "User interface development course © 2020 Hsoub Academy",
    chSubscribe: "Subscribe 2650",
    chMainPage: "Main Page",
    chMyVideos: "My Videos",
    chPlayList: "Play List",
    chChannels: "Channels",
    chDiscussion: "Discussion",
    chAbout: "About",
    logSearchInHistory: "Search",
    logType: "Search Type",
    logWatchHistory: "History",
    logSearchHistory: "Search History ",
    logComments: "Comments",
    logForums: "Forums",
    logHistory: "History",
    logHours: "24 hours ago",
    logDays: "3 days ago",
    logWeek: "week ago",
    logMonth: "month ago",
    srResults: "About 800 Results",
    srFilters: "Filters",
    srDwnDate: "Download Date",
    srHours: "Last Hour",
    srDay: "To Day",
    srWeek: "This Week",
    srMonth: "This Month",
    srYear: "This Year",
    srType: "Type",
    srVideo: "Video",
    srChannel: "Channel",
    srPlaylist: "Playlist",
    srMovie: "Movie",
    srShow: "Show",
    srSort: "Sort by",
    srRelative: "Relative",
    srViews: "Views",
    srRating: "Ratings",
    srLength: "Length",
    srShort: "Short (Less than 4 minutes)",
    srLong: "Long (More than 20 minutes)",
    wtMore: "Show more",
    waReport: "Report",
    waComments: "4 Comments",
    waSort: "Sort by",
    waDate: "Date",
    waNewComments: "New Comments",
    waComment: "Comment",
    waTime: "20 minutes ago",
    waReply: "Reply",
    waLike: "Like",
    waSuggest: "Suggestions",
  },
  ar: {
    youtuby: "يوتيوبي",
    suggested: "الفيديوهات المقترحة",
    recently: "المرفوعة حديثا",
    trending: "الفيديوهات الرائجة",
    arabic: "عربي",
    english: "english",
    search: "ابحث",
    login: "تسجيل الدخول",
    view: "3 آلاف مشاهدة ",
    date: "قبل 5 أشهر",
    loginTitle: "تسجيل الدخول",
    email: "البريد الإلكتروني:",
    password: "كلمة المرور:",
    forgotPass: "نسيت كلمة المرور",
    newAcc: "إنشاء حساب",
    loginBtn: "دخول",
    home: "الصفحة الرئيسية",
    myVideos: "فيديوهاتي",
    history: "سجل المشاهدة ",
    subscriptions: "الإشتراكات",
    movies: "الأفلام والعروض ",
    games: "ألعاب فيديو",
    fashion: "الموضة والجمال ",
    education: "محتوى تعليمي ",
    settings: "الإعدادات",
    help: "مساعدة",
    info: " دورة تطوير واجهات المستخدم © 2020 أكاديمية حسوب",
    chSubscribe: "اشتراك 2650",
    chMainPage: "الصفحة الرئيسية",
    chMyVideos: "فيديوهاتي",
    chPlayList: "قوائم التشغيل",
    chChannels: "القنوات",
    chDiscussion: "مناقشة",
    chAbout: "حول",
    logSearchInHistory: "ابحث في التاريخ",
    logType: "نوع السجل:",
    logWatchHistory: "سجل المشاهدة",
    logSearchHistory: "سجل البحث",
    logComments: "التعليقات",
    logForums: "المنتدى",
    logHistory: "التاريخ:",
    logHours: "منذ 24 ساعة",
    logDays: "منذ 3 أيام",
    logWeek: "منذ أسبوع",
    logMonth: "منذ شهر",
    srResults: "حوالي 800 نتيجة",
    srFilters: "التصفية",
    srDwnDate: "تاريخ التحميل",
    srHours: "آخر ساعة",
    srDay: "اليوم",
    srWeek: "هذا الأسبوع",
    srMonth: "هذا الشهر",
    srYear: "هذا العام",
    srType: "النوع",
    srVideo: "فيديو",
    srChannel: "قناة",
    srPlaylist: "قائمة تشغيل",
    srMovie: "فيلم",
    srShow: "عرض",
    srSort: "التصنيف بحسب",
    srRelative: "مدى الصلة",
    srViews: "عدد المشاهدات",
    srRating: "التقييم",
    srLength: "المدة",
    srShort: "قصير (أقل من 4 دقائق)",
    srLong: "طويل (أكثر من 20 دقيقة)",
    wtMore: "عرض المزيد",
    waReport: "إبلاغ",
    waComments: "التعليقات 4",
    waSort: "الترتيب بحسب",
    waDate: "التاريخ",
    waNewComments: "التعليقات الأجدد",
    waComment: "تعليق",
    waTime: "منذ 20 دقيقة",
    waReply: "الردود",
    waLike: "أعجبني",
    waSuggest: "الاقتراحات",
  },
};

const langSelector = document.querySelector("select");
langSelector.addEventListener("change", (e) => {
  setLang(e.target.value);
  localStorage.setItem("lang", e.target.value);
});
document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang");
  setLang(language);
});
const setLang = (lang) => {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-lang");
    element.innerHTML = translations[lang][translationKey];
  });
  document.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.setAttribute("dir", document.dir);
  $(document).ready(function () {
    if (document.body.getAttribute("dir") === "ltr") {
      $("#social").css({ right: "20px" });
      $("#social").css({ left: "unset" });
      $("input[data-lang='logSearchInHistory']").attr("placeholder", "Search");
      $(".search-input").attr("placeholder", "Search..");
      $("#search-filters-icon").removeClass("float-end");
      $("#search-filters-icon").addClass("float-start");
      $("i[data-icon='waLike']").attr("title", "Like");
      $("i[data-icon='waLater']").attr("title", "Watch Later");
      $("i[data-icon='waShare']").attr("title", "Share");
      $("i[data-icon='waList']").attr("title", "Add to playlist");
      $("textarea[data-comment='waCommPlaceHolder']").attr(
        "placeholder",
        "Add comment here.."
      );
      $(".user-name").removeClass("float-start");
      $(".user-name").addClass("float-end");
      $(".star-icon").removeClass("float-end");
      $(".star-icon").addClass("float-start");
    } else if (document.body.getAttribute("dir") === "rtl") {
      $("#social").css({ left: "20px" });
      $("#social").css({ right: "unset" });
      $("input[data-lang='logSearchInHistory']").attr(
        "placeholder",
        "ابحث في التاريخ"
      );
      $(".search-input").attr("placeholder", "ابحث..");
      $("#search-filters-icon").removeClass("float-start");
      $("#search-filters-icon").addClass("float-end");
      $("i[data-icon='waLike']").attr("title", "أحببته");
      $("i[data-icon='waLater']").attr("title", "المشاهدة لاحقًا");
      $("i[data-icon='waShare']").attr("title", "مشاركة");
      $("i[data-icon='waList']").attr("title", "إضافة إلى قائمة التشغيل");
      $("textarea[data-comment='waCommPlaceHolder']").attr(
        "placeholder",
        "إضافة تعليق عام.."
      );
      $(".user-name").removeClass("float-end");
      $(".user-name").addClass("float-start");
      $(".star-icon").removeClass("float-start");
      $(".star-icon").addClass("float-end");
    }
  });
};
