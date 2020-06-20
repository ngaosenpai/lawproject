import React, { useState } from 'react'
import { Form, FormGroup, FormText, CustomInput } from 'reactstrap'
import { Link } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'

import './styles.scss'

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
			<div className="my-bg-color mt-4 mt-md-5 py-5">

				<div className="container">
					<h4 className="text-center mb-4">
						Tính năng nổi bật
					</h4>
					<section className="row mb-5">
						<div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center">
							<Card 
								cTitle="Kết nối mọi người." 
								cDetail="Nơi mọi người từ khắp mọi miền kết nối với nhau. Và là môi trường trực tuyến để sinh viên luật va chạm thực tế."
							/>
						</div>
						
						<div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center">
							<Card 
								cTitle="Nhận trợ giúp từ cộng đồng." 
								cDetail="Mọi thắc mắc của bạn về luật pháp đều được sự trợ giúp từ các sinh viên luật và các chuyên gia đầu ngành về luật pháp."
							/>
						</div>
						<div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center">
							<Card  
								cTitle="Tranh luận và bày tỏ ý kiến."
								cDetail="Đưa ra những ý kiến về vấn đề mà người hỏi gặp phải. Có thể tán thành hoặc phản biện để đạt được sự chính xác nhất."
							/>
						</div>
						<div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center">
							<Card  
								cTitle="Xác thực và bảo mật thông tin."
								cDetail="Người hỏi được bảo mật toàn bộ thông tin, những sinh viên và chuyên gia được xác thực danh tính kĩ càng."
							/>
						</div>

					</section>
				</div>
			</div>
			<footer>
				footer...
			</footer>
		</div>
	)
}

export default Login