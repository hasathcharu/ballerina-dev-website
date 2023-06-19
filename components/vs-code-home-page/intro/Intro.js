/**
 * Copyright (c) 2023, WSO2 LLC (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Image from 'next-image-export-optimizer';

import { prefix } from '../../../utils/prefix';
import styles from './Intro.module.css';

export default function Intro() {

    const [hoverBtn, setHoverBtn] = React.useState(false);

    let linkArrowPath = prefix + '/images/toc-bg.svg';
    let linkArrowHoverPath = prefix + '/images/toc-bg-hover.svg';

    const linkArrow = {
        background: 'url(' + linkArrowPath + ') no-repeat right scroll',
        width: 'fit-content',
        paddingRight: '20px'

    }

    const linkArrowHover = {
        background: 'url(' + linkArrowHoverPath + ') no-repeat scroll',
        width: 'fit-content',
        paddingRight: '20px'
    }

    return (
        <>
        <Col xs={12}>
            <Container>
            <Row className='pageContentRow integration'>
                <Col xs={12} lg={5} className={styles.introText}>
                    <div>

                        {/* <p className={styles.introText2}>
                        "Code and Visualize Ballerina"
                        </p> */}

                        <p className={styles.introText3}>
                        The VS Code extension provides robust language support with visualization and design tools for Ballerina.
                        </p>

                        <p className={styles.dVersion}>
                        <br/>
                        <p>If you do not have Ballerina already installed,</p>
                        <a href={`https://ballerina.io/downloads/`}
                            className={styles.cVideoBtn} target="_blank" rel="noreferrer"> 
                            <Image src={`${prefix}/images/ballerina-get-started.svg`} width={20} height={20} alt="Try GraphQL services" />
                            Get Ballerina
                        </a>
                        <a href={`https://marketplace.visualstudio.com/items?itemName=WSO2.ballerina`}
                            className={styles.cDownload} target="_blank" rel="noreferrer">
                            Install the extension
                        </a>
                        <a href={`https://marketplace.visualstudio.com/items?itemName=WSO2.ballerina`}
                            className={styles.cDownloadOutlined} target="_blank" rel="noreferrer">
                            See it in action
                        </a>
                    </p>
                    </div>
                    <br/>     

                    <div>
                    <p >
                           
            
                            {/* <a href="https://www.youtube.com/watch?v=NYrKeElltg8&t=6s" className={styles.cVideoBtn} target="_blank" rel="noreferrer">
                            <Image src={`${prefix}/images/you-tube-play.svg`} width={20} height={20} alt="Try GraphQL services" />
                                        See it in action
                                        </a> */}
                         
                        </p>
                    </div>
          
                 

                </Col>
                <Col xs={12} lg={7} className={styles.introImg}>
                    {/* <Image src='/images/maxresdefault.jpg' alt='Integration' width={1280} height={780} /> */}
                    <img src={`${prefix}/images/vs-code-intro.png`} alt="AI" />
                </Col>
            </Row>

            {/* <Row className='pageContentRow integration'>
                <Col xs={12}>
                    <div className={styles.introText3}>
                        <p>Just write the code using the only language with integration friendly abstractions</p>
                    </div>

                    <div className={styles.dVersion}>
                        <a href={`${prefix}/downloads/`}
                            className={styles.cDownload}>
                            Download Ballerina
                        </a>
                    </div>

                </Col>
            </Row> */}



            </Container>
            </Col>
        </>
    );
}
