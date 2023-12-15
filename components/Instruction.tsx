import React from 'react';
import '../app/globals.css';


const Instruction = () => {
  return (
    <section className='fflexCentlex-col er overflow-hidden py-24'>
      <img style={{
        margin: '0 auto',
          
        }}  src="instruction.svg" alt="Instruction" />
      <div
  style={{
    width: '1000px',
    height: '270px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: '50%',
  }}
>
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(120, 48, 46, 0.4)', 
      filter: 'blur(60px)', 
      borderRadius: '50%',
    }}
  ></div>
  <p
    style={{
      fontSize: '50px',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: '0',
      position: 'relative',
      zIndex: 1, 
      color: 'rgba(120, 48, 46, 1)',
    }}
  >
    Create QR code in 3 steps
  </p>
</div>
      <div className="Container">
      
        <div className="Rectangle">
          <div className="Rectangle2">
          <p className = "rec2text">Step 1:</p>
          </div>
          <p className = "rectext">Choose the type</p>
        </div>

      
        <div className="Rectangle">
          <div className="Rectangle2">
          <p className = "rec2text">Step 2:</p>
          </div>
          <p className = "rectext">Generate QR code</p>
        </div>

       
        <div className="Rectangle">
          <div className="Rectangle2"> 
          <p className = "rec2text">Step 3:</p>
          </div>
          <p className = "rectext">Customize and download</p>
        </div>
      </div>
    </section>
  );
};

export default Instruction;
