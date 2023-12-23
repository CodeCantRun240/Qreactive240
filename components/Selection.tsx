import React from 'react';
import '../app/module.css';
import '../app/faq/styles.css';

const Selection = () => {
  return (
    <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" />
    <div className="buttonContainer">
      <button className="button"><img src='Link.svg'></img><span>Link/URL</span></button>
      <button className="button"><img src='PDF.svg'></img><span>PDF</span></button>
      <button className="button"><img src='Text.svg'></img><span>Text</span></button>
      
    </div>
    <div className="buttonContainer">
      
      <button className="button"><img src='Wifi.svg'></img><span>Wifi</span></button>
      <button className="button"><img src='Image.svg'></img><span>Image</span></button>
      <button className="button"><img src='Music.svg'></img><span>Music</span></button>
    </div>

    <div style = {{display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',}}>
    <button className="showmore" 
            style={{fontFamily: 'Lato'}}><span>Show more</span></button>
    </div>

    <div style = {{display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',}}>
    <button className="nextStepButton"><span>Next step to QR code</span></button>
    </div>
    </div>

    
    

    
  );
}

export default Selection;