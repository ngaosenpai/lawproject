import React, { useState } from 'react'
import { Form, FormGroup, FormText, CustomInput } from 'reactstrap'
import { Link } from 'react-router-dom'

import './styles.scss'

import Navbar from '../../components/Navbar/Navbar'
function Login(){

	function handleLogin(event){
		event.preventDefault()
	}

	return(
		<div>
			<Navbar className="top-nav" />

			<div className="container">
				<section className="row">
					<Form 
						className="col-12 col-md-6 my-form mt-4 mt-md-5"
						onSubmit={e => e.preventDefault()}
					>
						<FormGroup>
							<h4>Trao đổi luật pháp với mọi người</h4>
							<p className="text-muted">Cộng đồng tư vấn pháp lí và trao đổi các vấn đề pháp luật lớn nhất Việt Nam</p>
						</FormGroup>

						<FormGroup>
							<input type="text" className="inp-text-rounded" placeholder="Tài khoản của bạn" />
							<input type="password" className="inp-text-rounded" placeholder="Mật khẩu của bạn" />
							<CustomInput 
								className="text-muted"
								type="switch" 
								id="exampleCustomSwitch" 
								name="customSwitch" 
								label="Nhớ tài khoản" 
							/>
						</FormGroup>	
						<FormGroup>
							<button 
								conClick={e => this.handleLogin(e)} 
								className="cus-button"
							>Đăng nhập</button>
						</FormGroup>
						<FormGroup className="cus-form-group">
							<Link to="/">Quên mật khẩu?</Link>
							<Link to="/">Đăng kí ngay?</Link>
						</FormGroup>
						<FormText className="cus-form-text">
							<p>Hoặc</p> 
						</FormText>
						<FormGroup>
							<button className="fb-btn">Đăng nhập với Facebook</button>
						</FormGroup>
					</Form>
					<div className="col-12 col-md-6 mt-4 mt-md-5">
						
					</div>
				</section>

			</div>

		</div>
	)
}

export default Login