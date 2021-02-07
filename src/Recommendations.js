import React from 'react';
import Card from './components/Card';
import './Recommendations.scss'

const CardHeader = ({ title }) => (
  <div className="recom-card-head">
    <p>{title}</p>
  </div>
);

const CardFooter = ({ text }) => (
  <div className="recom-card-bottom">
    <p id="text">{text}</p>
  </div>
);


function Recommendations() {
  return (
    <div className="recom-content">
      <h1>RECOMMENDATIONS</h1>
      <div className="recom-cards">
        <Card
          head={<CardHeader title="Leon Wang (VP of Engineering at Graphen)"/>}
          bottom={<CardFooter
            text=" &ldquo; Jill has completed her 2019 summer intern in Graphen far beyond my expectation. Originally, we only
            expected she could do some of tedious tasks as a normal 3rd year college student, nevertheless, she helped
             us not only in frontend react coding, but also in machine learning modal training and suggestion ... [H]er
              solid statistical and mathematical foundation exceed many university graduated students in our intern and
               she could do more complex mathematical modeling analysis. She could pick up new technologies quickly and
               actively. She always was actively taking hard topics and figured out the answer timely by her own for our
                limited helps. Also, her programming sense is strong, she knows to write an clean and structure codes
                like R, python, javascript to easily maintain. Her performance is far more than our wishes in the
                beginning. If you ask me if I will hire her in the future, my answer is definitely yes.
                I truly wish she will keep her proactive attitude to move on her academy life and career in the future.
                &rdquo;"

          />}
          makeFlip={false}/>
        <Card
          head={<CardHeader title="Yun-Wei Chang (Software Developer at Graphen)"/>}
          bottom={<CardFooter
            text=" &ldquo;... I enjoyed working with Jill. She is very motivated and outspoken. During her
            internship, she was able to work independently and learn relevant technologies very quickly. She
             contributed to our React.js codebase immediately even though she came in halfway through...“
                &rdquo;"

          />}
          makeFlip={false}/>
      </div>
    </div>

  );
}

export default Recommendations;