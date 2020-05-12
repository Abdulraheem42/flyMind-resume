import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import Pdf from "react-to-pdf";

const Navbar = (props) =>{
        return (
            <div className='resume-header'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='logo'>
                        <h2 className='font-size45 logo-color'><span className='logo-color2'>Fly</span>Mind</h2>
                    </div>
                    <div>
                        <Pdf targetRef={props.targetRef} filename={`${props.fullName} Resume.pdf`}>
                            {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
                        </Pdf>
                    </div>
                </div>
            </div>
        );
}

export default Navbar;