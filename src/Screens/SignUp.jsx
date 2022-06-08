import React, { useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import { InfoCircleOutlined, UserOutlined,EyeInvisibleOutlined  } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import LockIcon from '@mui/icons-material/Lock';
import DraftsIcon from '@mui/icons-material/Drafts';
import svg from '../assests/wavebottom.svg'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const SignUp = () => {
    
    const [size, setSize] = useState('large');
    const [value, setValue] = useState('')
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <>
    <div className="main">
    <form className="form">
        <div className="mainContainer">
      {/* <img src={svg} alt="" srcset="" /> */}
            <div className="left">
                <h2>SIGN UP</h2>
                <p>Create new account</p>
                <Input size="large" placeholder="Enter your Name" prefix={<AccountCircleOutlinedIcon />} className='input'/>
                <Input size="large" placeholder="Enter your email" prefix={<DraftsIcon />} className='input'/>
                <Input
                className='input'
      placeholder="Enter your password"
      prefix={<LockIcon className="site-form-item-icon" />}
      suffix={
        <Tooltip title="Extra information">
          <EyeInvisibleOutlined 
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />
 
           
                <Button type="primary" shape="round" className='btn'  size={size} >
        Sign Up
      </Button>
    <p>Already have an account ? <span className='span'>
    <Link to="/login">Login here</Link>
</span></p>
      
            </div>
            <div className="right">
              <h1>Welcome!</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit eligendi delectus! Reiciendis 
                tempora error numquam non pariatur 
                veritatis mollitia! Exercitationem vero eum est soluta pariatur quaerat sunt doloremque suscipit!</p>
                <img src={svg} alt="" srcset=""style={{position:'absolute', bottom:0, left:0,maxWidth:"100%",maxHeight:"100%",borderBottomRightRadius:'2em'}}/>
                {/* <div className="wave"></div> */}
            </div>
        </div>
        </form>
        </div>
    </>
  )
}

export default SignUp