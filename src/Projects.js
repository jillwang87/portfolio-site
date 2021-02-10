import React from 'react';
import Card from './components/Card';
import './Projects.scss'

const CardHeader  = ({ text }) => (
  <div className='projects-card-head'>
    <p>{text}</p>
  </div>
);

const CardFooter = ({ text, subtext }) => (
  <div className='projects-card-footer'>
    <p id="text">{text}</p>
    <p id="subtext">{subtext}</p>
  </div>
);


function Projects () {
  return (
    <div className="projects-content">
      <h1>PROJECTS</h1>
      <div className="projects-cards">
        <Card
          head={<CardHeader text="Fashion MNIST" />}
          bottom={<CardFooter text="Using Fashion MNIST dataset (fashion items images), achieved 94.73% accuracy
          with a CNN that ran within 20 minutes" />}
          makeFlip={ true }
        >
          <dl className="projects-card-back">
            <dt>
              - Kaggle Leaderboard: <a href="https://www.kaggle.com/c/stat441datachallenge2/leaderboard">Link</a>
            </dt>
            <dt>
              - Since Fashion MNIST images are heavily preprocessed, a small CNN can most likely outperform a deep net;
              hence, I built a small CNN using VGG16 as an inspiration. The CNN
              includes Batch Normalization on each layer to perform regularization, and a LeakyRelu activation function
              to speed up training
            </dt>
            <dt>
              - I am aiming for fast training instead of high accuracy, the benchmark accuracy is 96.91%, but my model
              may train faster than most of the benchmark models
            </dt>
            <dt>
              - Trained for 90 epochs for under 20 minutes
            </dt>
            <dt id="bold">
              - Technologies: Python, scikit-learn, TensorFlow Keras, CNN
            </dt>
          </dl>
        </Card>
        <Card
          head={<CardHeader text="Jewellery Shop Prediction" />}
          bottom={<CardFooter text="Predicting whether an online jewellery shop visitor will purchase an item from
          the shop using XGBoost with 93.33% accuracy" />}
          makeFlip={ true }
        >
          <dl className="projects-card-back">
            <dt>
              - Kaggle Leaderboard: <a href="https://www.kaggle.com/c/stat441datachallenge1/leaderboard">Link</a>
            </dt>
            <dt>
              - Use XGBoost on the highly imbalanced classification dataset
            </dt>
            <dt>
              - Use grid search to tune the hyperparameters
            </dt>
            <dt>
              - Use stratified, shuffled (randomized observations order) 4 fold cross validation to estimate accuracy,
            </dt>
            <dt>
              - Technologies: Python, scikit-learn, XGBoost
            </dt>
          </dl>
        </Card>
        <Card
          head={<CardHeader text="Portfolio Site" />}
          bottom={<CardFooter text="Thanks for visiting :)" subtext="" />}
          makeFlip={ true }
        >
          <dl className="projects-card-back">
            <dt>
              - Designed on Figma: <a href="https://www.figma.com/file/17TM6aWfuknDyR2q8AB6lY/Portfolio-Site?node-id=12%3A341/">Figma Link</a>
              <br/>I am not a designer so be kind :P
            </dt>
            <dt>
              - Built the mobile responsive portfolio site using React
            </dt>
            <dt>
              - Technologies: JavaScript, React, SASS
            </dt>
          </dl>
        </Card>
        <Card
          head={<CardHeader text="Music Trend Analysis" />}
          bottom={<CardFooter text="Using Spotify Web API to obtain music data to analyze music trend." subtext="Coming Soon..." />}
          makeFlip={false}
        />
      </div>
    </div>

  );
}

export default Projects;