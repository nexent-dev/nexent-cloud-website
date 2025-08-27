import React from 'react'
import './Login.css'

const Login: React.FC = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <div className="login-header">
            <h1>Sign In</h1>
            <p>Access your Nexent Cloud dashboard</p>
          </div>
          
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            
            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="forgot-link">Forgot password?</a>
            </div>
            
            <button type="submit" className="btn btn-primary login-btn">Sign In</button>
          </form>
          
          <div className="login-footer">
            <p>Don't have an account? <a href="#signup">Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
