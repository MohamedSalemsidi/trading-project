import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const img1 = "../src/images/portfolio-img2.jpg";
  const img2 = "../src/images/portfolio-img3.jpg";

  const desc1 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo dolor similique doloremque? A ducimus beatae doloremque
              modi. Molestiae culpa perferendis soluta aliquam quam inventore
              alias placeat, aspernatur possimus, labore quibusdam deleniti
              velit officiis quia eligendi dolorum voluptatem voluptate
              temporibus similique 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              accusamus! Asperiores commodi alias sunt, rerum quod maiores
              delectus omnis doloremque.
              `;
  const desc2 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo dolor similique doloremque? A ducimus beatae doloremque
              modi. Molestiae culpa perferendis soluta aliquam quam inventore
              alias placeat, aspernatur possimus, labore quibusdam deleniti
              velit officiis quia eligendi dolorum voluptatem voluptate
              temporibus similique 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              accusamus! Asperiores commodi alias sunt, rerum quod maiores
              delectus omnis doloremque.
              `;
  return (
    <>
      <div className="navbar navbar-expand-sm bg-dark navbar-dark text-white">
        <div className="container">
          <a href="#" className="navbar-brand">
            منصة تداول
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  الاشتراك
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  تسجيل الدخول
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#youtube" className="nav-link">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Hero />

      <Services />

      <Learn img={img1} title="Learn Basics" desc={desc1} />
      <Learn
        img={img2}
        title="where to go next"
        desc={desc2}
        rowReverse="flex-row-reverse"
      />

      <Faq />
      <Footer/>
    </>
  );
}

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-dark text-light text-center text-sm-end py-5"
    >
      <div className="container">
        <div>
          <div>
            <h1 className="py-2">
              تداول بكل <span className="text-warning ">حرية</span>
            </h1>
            <p className="py-2 lead">
              قصص لرواد أعمال عرب ما الذي يميزهم؟ لماذا نطلق عليهم مسمي رواد
              األعمال؟ كيف تبني مثلهم مشروعك الصغير أو شركتك الناشئة؟ ما الذي
              يجعل شخص ما رائد أعمال؟ السمات الشخصية و المهارات ماذا يفعلون بشكل
              يومي؟ كيف يختلف ذلك عن الوظيفة التقليدية؟ خلفية رواد االعمال، هل
              هم دائما شباب؟
            </p>
            <button className="btn btn-warning">استكشف المزيد</button>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
const Services = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-md ">
            <Card
              icon="bi bi-arrows-angle-contract"
              title="أنواع مختلفة لريادة األعمال"
              desc="الريادة المجتمعية 
الشركات الناشئة التقنية 
الشركات العائلية دورة حياة الشركة الناشئة
مرحلة الفكرة. التجربة /النموذج األولي/ برهان الفكرة. تصميم نموذج 
وتخطيط المشروع. اطالق المشروع. بناء الشركة. التمويل. التوسع
والنمو. النضج. التخارج أو البيع."
            />
          </div>
          <div className="col-md">
            <Card
              icon="bi bi-briks"
              title="من أين تأتي األفكار الجيدة?"
              desc="أمثلة أفكار مشاريع ناشئة ناجحة )دراسة حالة(
ما الذي يجعل تلك المشاريع جيدة؟
2.2 ما الذي يجعل فكرة مشروعك ناجحة؟ 
االتجاهات الجديدة 
التكنولوجيا الحديثة
ايجاد حل لمشكلة
احتياجات السوق، الفجوات
االحتياجات األساسية )القيمة المقترحة(
أمثلة 
رائد وامين"
            />
          </div>
          <div className="col-md">
            <Card
              icon="bi bi-bounding-box-circles"
              title="كيف تقيم فكرة مشروعك"
              desc="تصفية األفكار
معايير تقييم األفكار
تطوير األفكار
التجربة و االستكشاف المتكرر - الشركات الناشئة المرنة
عقلية المستثمر: المخاطرة، العائد او الربح، الثقة، قدرة رائد األعمال
التقييم المالي تصفية األفكار
معايير تقييم األفكار
تطوير األفكار
التجربة و االستكشاف المتكرر - الشركات الناشئة المرنة"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, desc, icon }) => {
  return (
    <div className="card bg-dark text-light mt-3">
      <div className="h1 mt-3">
        <i className={icon}></i>
      </div>
      <div className="card-body text-center">
        <h4 className="card-title text-warning">{title}</h4>
        <p className="card-text">{desc}</p>
        <button className="btn btn-warning">learn More</button>
      </div>
    </div>
  );
};

const Learn = ({ img, title, desc, rowReverse }) => {
  return (
    <section id="learn" className="py-5 bg-dark text-light">
      <div className="container">
        <div className={"row align-items-center justify-content-center"}>
          <div className="col-md">
            <img src={img} className="img-fluid" alt="image" />
          </div>
          <div className="col-md py-4">
            <h2>{title}</h2>
            <p>{desc}</p>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Faq = () => {
  return (
    <section id="faq" className="py-5">
      <div className="container">
        <h2 className="text-center mb-3">Frequently Ask Questions</h2>
        <div className="accordion accordion-flush" id="faq">
          <div className="accordion-item">
            <h6 className="accordion-header" id="question-one">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#answer-one"
              >
                Question one
              </button>
            </h6>
            <div
              className="accordion-collapse-collapse py-3 px-4"
              id="answer-one"
              data-bs-parent="#faq"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem laboriosam debitis quisquam!
            </div>
          </div>
          <div className="accordion-item">
            <h6 className="accordion-header" id="question-two">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#answer-two"
              >
                Question two
              </button>
            </h6>
            <div
              className="accordion-collapse-collapse py-3 px-4"
              id="answer-two"
              data-bs-parent="#faq"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem laboriosam debitis quisquam!
            </div>
          </div>
          <div className="accordion-item">
            <h6 className="accordion-header" id="question-three">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#answer-three"
              >
                Question three
              </button>
            </h6>
            <div
              className="accordion-collapse-collapse py-3 px-4"
              id="answer-three"
              data-bs-parent="#faq"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem laboriosam debitis quisquam!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ()=> {
  return (
    <footer className="py-5 bg-dark text-white text-center position-relative">
        <div className="container">
          <p className="lead">
            Copyright &copy; 2023 Mohamed Salem
          </p>

          <a href="#" className="position-absolute bottom-0 end-0 p-5">
            <i className="bi bi-arrow-up-circle h2">up</i>
          </a>
        </div>
    </footer>
  )
}

export default HomePage;
