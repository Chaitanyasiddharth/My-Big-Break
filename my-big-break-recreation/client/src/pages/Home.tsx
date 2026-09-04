/*
 * Design reminder: Reference-matched career advancement editorial.
 * Preserve the source site's bright white / deep blue / lime accent language,
 * long-form service sequence, direct voice, and public content inventory.
 */
import { FormEvent, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  MessageCircle,
  MoveUpRight,
  Quote,
  Sparkles,
  X,
} from "lucide-react";

const HERO_IMAGE = "/manus-storage/my-big-break-hero_ee921869.jpg";
const COACHING_IMAGE = "/manus-storage/my-big-break-coaching_0b392fe3.jpg";
const ASSESSMENT_IMAGE = "/manus-storage/my-big-break-assessment_2ab9e74c.jpg";
const MARK_IMAGE = "/manus-storage/my-big-break-mark_733278a9.png";

const resumePoints = [
  "Get your Resume Done post One on One Discussions with our Experts.",
  "Building your success story to get recruiters attention",
  "Presenting experience summary with key skills & competencies",
  "Responsibilities & achievements effectively structured & highlighted",
  "Keyword optimised to pass through applicant tracking systems (ATS)",
];

const coachingPoints = [
  "Coaching by professionals with decades of experience",
  "One on one coaching basis your strengths & abilities",
  "Personalised recommendations on your behavioural, communication & social skills",
  "Training on how to handle various levels of interviews",
];

const assessmentPoints = [
  "Understand your personality traits",
  "Ascertain your sense of urgency to perform",
  "Ability to learn",
  "Leadership effectiveness & organisation acumen",
  "Adaptability to change",
];

const assessmentTypes = [
  "Psychometric Personality",
  "Managerial Potential",
  "Learning Agility",
  "Leadership",
  "General Aptitude",
];

const faqs = [
  {
    group: "Resume Services",
    questions: [
      "What qualifications do My Big Break resumes Writers/Coaches have?",
      "What is the free resume review?",
      "What does My Big Break do?",
    ],
  },
  {
    group: "Interview Coaching",
    questions: [
      "How are My Big Break coaches different from other coaches?",
      "Why should I choose your interview coaching service?",
      "What qualifications do My Big Break Coaches have?",
    ],
  },
];

function SectionEyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p className={`eyebrow ${light ? "eyebrow--light" : ""}`}>
      <span className="eyebrow__tick" aria-hidden="true" />
      {children}
    </p>
  );
}

function PointList({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return (
    <ul className={`point-list ${compact ? "point-list--compact" : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <span className="point-list__icon" aria-hidden="true">
            <Check size={14} strokeWidth={3} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function AppMark({ large = false }: { large?: boolean }) {
  return (
    <a href="#top" className={`brand ${large ? "brand--large" : ""}`} aria-label="My Big Break home">
      <span className="brand__symbol">
        <img src={MARK_IMAGE} alt="" />
      </span>
      <span className="brand__copy">
        <strong>MY BIG BREAK</strong>
        <em>ahead, among the best</em>
      </span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>("Resume Services-0");
  const [submitted, setSubmitted] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="nav-wrap">
          <AppMark />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Primary navigation">
            <a href="#top" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#resume" onClick={() => setMenuOpen(false)}>Resume Services</a>
            <a href="#coaching" onClick={() => setMenuOpen(false)}>Interview Coaching</a>
            <button type="button" onClick={scrollToContact}>Contact Us</button>
            <a className="cart-link" href="#contact" aria-label="Cart with 0 items">
              <span>0</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content">
            <SectionEyebrow>Career growth, clarified</SectionEyebrow>
            <h1 id="hero-title">Make your next move<br /><span>your big break.</span></h1>
            <p className="hero__lede">Strategic resumes, sharper interviews, and assessments that help your real strengths stand out.</p>
            <div className="hero__actions">
              <button className="button button--primary" type="button" onClick={scrollToContact}>
                Get a Special Offer <ArrowRight size={17} />
              </button>
              <a className="text-link" href="#resume">Explore services <ArrowDownRight size={16} /></a>
            </div>
            <div className="hero__proof">
              <span className="hero__proof-mark"><Sparkles size={14} /></span>
              <span><strong>One-on-one guidance</strong><br />from people who know the process.</span>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__image-frame">
              <img src={HERO_IMAGE} alt="Professional reviewing a resume at a bright office desk" />
            </div>
            <div className="hero__note hero__note--top">
              <span>01</span>
              <strong>Find your edge</strong>
            </div>
            <div className="hero__note hero__note--bottom">
              <span className="hero__note-icon"><MoveUpRight size={17} /></span>
              <strong>Stand out with intention.</strong>
            </div>
          </div>
          <div className="hero__rail" aria-hidden="true">MY BIG BREAK <span>—</span> PROFESSIONAL CAREER SERVICES</div>
        </section>

        <section className="intro-strip" aria-label="Service overview">
          <div className="intro-strip__inner">
            <p>YOUR EXPERIENCE<br /><strong>DESERVES A BETTER STORY.</strong></p>
            <div className="intro-strip__line" />
            <p className="intro-strip__detail">Resume writing, interview coaching and assessments — with the clarity to move forward.</p>
          </div>
        </section>

        <section className="service service--resume" id="resume" aria-labelledby="resume-title">
          <div className="service__number">01</div>
          <div className="service__copy">
            <SectionEyebrow>Resume writing</SectionEyebrow>
            <h2 id="resume-title">Professionally written,<br /><span>by experts who know your industry.</span></h2>
            <p className="service__lead">A resume should do more than list your experience. It should make the right reader stop, understand your value, and want to know more.</p>
            <PointList items={resumePoints} />
            <a className="button button--outline" href="#contact">Know More <ArrowRight size={17} /></a>
          </div>
          <aside className="service__side-card">
            <div className="side-card__label">The outcome</div>
            <p>One clear, confident story — built around the work you want next.</p>
            <div className="side-card__rule" />
            <span>Resume services</span>
          </aside>
        </section>

        <section className="service service--coaching" id="coaching" aria-labelledby="coaching-title">
          <div className="coaching__visual">
            <div className="coaching__image-frame">
              <img src={COACHING_IMAGE} alt="Career coach conducting a one-on-one mock interview" />
            </div>
            <div className="coaching__caption">Practice makes<br /><strong>possibility practical.</strong></div>
          </div>
          <div className="service__copy service__copy--coaching">
            <div className="service__number">02</div>
            <SectionEyebrow>Interview coaching services</SectionEyebrow>
            <h2 id="coaching-title">Sharpen your interview skills with <span>our experienced & finest coaches.</span></h2>
            <p className="service__session"><strong>3</strong> Sessions of 45 Minutes each.</p>
            <PointList items={coachingPoints} />
            <a className="button button--dark" href="#contact">Know More <ArrowRight size={17} /></a>
          </div>
        </section>

        <section className="assessment" id="assessments" aria-labelledby="assessment-title">
          <div className="assessment__topline">
            <SectionEyebrow>Assessments</SectionEyebrow>
            <span className="assessment__index">03 / 03</span>
          </div>
          <div className="assessment__grid">
            <div className="assessment__copy">
              <h2 id="assessment-title">Assessments are used to scientifically measure <span>the capabilities of a candidate.</span></h2>
              <PointList items={assessmentPoints} compact />
              <a className="button button--light" href="#contact">Know More <ArrowRight size={17} /></a>
            </div>
            <div className="assessment__visual">
              <img src={ASSESSMENT_IMAGE} alt="Resume, profile cards, and assessment markers arranged on a desk" />
              <div className="assessment__visual-card">
                <span>Insight over assumption</span>
                <strong>See the<br />whole candidate.</strong>
              </div>
            </div>
          </div>
          <div className="assessment-types" aria-label="Assessment types">
            {assessmentTypes.map((type, index) => (
              <div className="assessment-type" key={type}>
                <span>0{index + 1}</span>
                <strong>{type}</strong>
                <ArrowUpRight size={17} aria-hidden="true" />
              </div>
            ))}
          </div>
        </section>

        <section className="social-proof" aria-label="Public social proof labels">
          <div className="social-proof__title">
            <span className="social-proof__spark"><Sparkles size={16} /></span>
            <strong>Happy Customers</strong>
          </div>
          <div className="social-proof__quote"><Quote size={20} /><span>Google Testimonials</span></div>
          <p className="social-proof__note">See what candidates say about their experience with My Big Break.</p>
        </section>

        <section className="faq" id="faq" aria-labelledby="faq-title">
          <div className="faq__heading">
            <SectionEyebrow>Help center</SectionEyebrow>
            <h2 id="faq-title">Frequently Asked <span>Questions</span></h2>
            <p>Useful answers before you take the next step.</p>
          </div>
          <div className="faq__groups">
            {faqs.map((group) => (
              <div className="faq-group" key={group.group}>
                <div className="faq-group__top">
                  <span>0{faqs.indexOf(group) + 1}</span>
                  <h3>{group.group}</h3>
                </div>
                <div className="faq-group__questions">
                  {group.questions.map((question, index) => {
                    const key = `${group.group}-${index}`;
                    const isOpen = openFaq === key;
                    return (
                      <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={question}>
                        <button type="button" onClick={() => setOpenFaq(isOpen ? null : key)} aria-expanded={isOpen}>
                          <span>{question}</span>
                          <ChevronDown size={17} aria-hidden="true" />
                        </button>
                        {isOpen && <p className="faq-item__answer">Our experts bring practical industry experience and a one-on-one approach to help you prepare with more clarity and confidence.</p>}
                      </div>
                    );
                  })}
                </div>
                <a href="#contact" className="faq-group__link">Read More <ArrowRight size={16} /></a>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact__copy">
            <SectionEyebrow light>Want to know more?</SectionEyebrow>
            <h2 id="contact-title">Contact <span>Us!</span></h2>
            <p>Tell us where you are in your career journey. We’ll help you choose the right next move.</p>
            <div className="contact__mini-list">
              <span><MessageCircle size={16} /> Personal guidance</span>
              <span><Check size={16} /> Clear next steps</span>
            </div>
          </div>
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="form-success" role="status">
                <span className="form-success__icon"><Check size={22} /></span>
                <h3>Thank you for reaching out.</h3>
                <p>Your details are ready for a My Big Break representative to review.</p>
                <button className="button button--light" type="button" onClick={() => setSubmitted(false)}>Send another enquiry</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__header"><span>CONTACT US</span><em>Get a Special Offer</em></div>
                <label>Full Name<input name="name" type="text" placeholder="Your name" required /></label>
                <label>Email<input name="email" type="email" placeholder="eMail Id" required /></label>
                <label>Mobile<input name="mobile" type="tel" placeholder="10 Digit mobile no." pattern="[0-9]{10}" required /></label>
                <label>Select Service<select name="service" defaultValue="" required><option value="" disabled>Select Service</option><option>Resume Services</option><option>Interview Coaching</option><option>Assessment</option></select></label>
                <button className="button button--lime" type="submit">SUBMIT <ArrowRight size={17} /></button>
              </form>
            )}
          </div>
        </section>

        <section className="free-content" aria-label="Free content">
          <span className="free-content__line" />
          <a href="#faq">Free Content on Resume Writing <ArrowRight size={15} /></a>
          <span className="free-content__line" />
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer__main">
          <div className="footer__brand"><AppMark large /><p>Helping professionals move ahead, among the best.</p></div>
          <div className="footer__links">
            <div><span className="footer__label">Quick Links</span><a href="#resume">Resume Services</a><a href="#coaching">Interview Coaching</a><a href="#faq">Blog</a><a href="#contact">Get Involved</a></div>
            <div><span className="footer__label">More</span><a href="#contact">Contact Us</a><a href="#top">About Us</a><a href="#top">Terms & Conditions</a><a href="#top">Refund Policy</a><a href="#top">Privacy Policy</a></div>
          </div>
          <div className="footer__social"><span className="footer__label">Follow Us On</span><div><a href="https://www.facebook.com/mybigbreak.in/" aria-label="Follow on Facebook"><Facebook size={17} /></a><a href="https://www.instagram.com/mybigbreak.in/" aria-label="Follow on Instagram"><Instagram size={17} /></a><a href="https://www.linkedin.com/company/mybigbreak/" aria-label="Follow on LinkedIn"><Linkedin size={17} /></a></div></div>
        </div>
        <div className="footer__bottom"><span>© 2024 My Big Break. All Rights Reserved.</span><span>Professional career services</span></div>
      </footer>

      <button className="floating-chat" type="button" onClick={scrollToContact} aria-label="Contact My Big Break"><MessageCircle size={20} /></button>
    </div>
  );
}

function ArrowUpRight({ size }: { size: number }) {
  return <MoveUpRight size={size} aria-hidden="true" />;
}
