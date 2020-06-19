import React, { useState } from 'react'
import { Form, FormGroup, FormText, CustomInput } from 'reactstrap'
import { Link } from 'react-router-dom'

import './styles.scss'

import Navbar from '../../components/Navbar/Navbar'
function Login(){

	function handleLogin(event){
		event.preventDefault()
		console.log("login")
	}

	return(
		<div>
			<Navbar moreClassName="fixed-top"/>

			<div className="container mt-under-navbar">
				<section className="row">
					<div className="col-12 col-md-6 my-4 my-md-5">
						<Form 
							className="my-form"
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
									onClick={e => handleLogin(e)} 
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
					</div>
					
					<div className="col-12 col-md-6 my-4 my-md-5">
						<img src="https://picsum.photos/400/300" alt=""className="des"/>
					</div>
				</section>

			</div>

		</div>
	)
}

export default Login