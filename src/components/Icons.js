import emailIcon from '../images/email-icon.svg';
import githubIcon from '../images/github-icon.png';
import linkedinIcon from '../images/linkedin-icon.svg';
import kaggleIcon from '../images/kaggle-icon.png';

const kaggleAddr = "https://www.kaggle.com/jillwang87";
const githubAddr = "https://github.com/jillwang87";
const linkedinAddr = "https://www.linkedin.com/in/jill-ycwang98/";
const emailAddr = "jill.ycwang98@gmail.com";



const createIconLink = (addr, title, img) => (
  <div className="icon">
    <a href={addr}>
      <img src={img} alt={title} />
    </a>
  </div>
);

function Icons () {
  return (
    <div className="icons">
      { createIconLink(kaggleAddr, "Kaggle", kaggleIcon) }
      { createIconLink(githubAddr, "GitHub", githubIcon) }
      { createIconLink(linkedinAddr, "LinkedIn", linkedinIcon) }
      { createIconLink(emailAddr, "Email", emailIcon) }
    </div>
  );
}

export default Icons;
