import React from 'react';

// Modules
import { Card, Button, Input, Checkbox } from 'antd';

// Style
import './LoginStyle.css';

const LoginView = (props) => {

    return(

        <div>

            <Card
                style={{
                    width: 400,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    margin: '-100px 0 0 -150px',
                }}
                title='Entrar'
            >

                <Input 
                    placeholder='E-mail' 
                    type='email' 
                    style={{
                        marginBottom: 10
                    }}
                    />
                
                <Input 
                    placeholder='Senha' 
                    type='password' 
                    style={{
                        marginBottom: 10
                    }}
                />

                <Button 
                    type='primary'
                    style={{
                        width: '100%',
                        marginBottom: 10
                    }}
                >Entrar</Button>

                <Checkbox>
                    Mantenha conectado
                </Checkbox>

            </Card>

        </div>

    )

};

export default LoginView;