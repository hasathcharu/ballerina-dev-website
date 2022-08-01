import React from 'react';
import { Row, Col, Button, Offcanvas, Container } from 'react-bootstrap';
import Image from 'next-image-export-optimizer';

import Layout from '../../layouts/LayoutRN';
import { prefix } from '../../utils/prefix';
import archive from '../../_data/release_notes_versions.json';
import SLArchive from '../../_data/swanlake_release_notes_versions.json';
import archivedToc from '../../utils/archived-lm.json';

import dynamic from 'next/dynamic';


export default function AllArchived() {

    const LeftNav = dynamic(() => import('../../components/common/left-nav/LeftNav'), { ssr: false });

    function comparePositions(a, b) {
        return (b['release-date'] > a['release-date']) ? 1 : ((b['release-date'] < a['release-date']) ? -1 : 0)
    }

    let release12x = [];
    let release11x = [];
    let release10x = [];
    let release09x = [];

    const splitArray = (value) => {
        if (value.version.match(/^1.2/)) {
            release12x.push(value);
        } else if (value.version.match(/^1.1/)) {
            release11x.push(value);
        } else if (value.version.match(/^1.0/)) {
            release10x.push(value);
        } else {
            release09x.push(value);
        }
    }

    archive.map(splitArray)

    const sortedRelease12x = release12x.sort(comparePositions);
    const sortedRelease11x = release11x.sort(comparePositions);
    const sortedRelease10x = release10x.sort(comparePositions);
    const sortedRelease09x = release09x.sort(comparePositions);

    // Show mobile left nav
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Control Left nav
    const [mainDir, setMainDir] = React.useState('swan-lake-archived-versions');
    const [id, setId] = React.useState('');
    
    const setLeftNav = (hash) => {

        if (hash.match(/^1.2./)) {
            setMainDir('1.2.x-archived-versions');
            setId(hash+'v');
        } else if (hash.match(/^1.1./)) {
            setMainDir('1.1.x-archived-versions');
            setId(hash+'v');
        } else if (hash.match(/^1.0./)) {
            setMainDir('1.0.x-archived-versions');
            setId(hash+'v');
        } else if (hash.match(/^0.9/)) {
            setMainDir('0.9.x-archived-versions');
            setId(hash+'v');
        } else {
            setMainDir('swan-lake-archived-versions');
            setId(hash+'v');
        } 
    }

    React.useEffect(() => {
        let hash = global.location.hash;
        hash = hash.replace(/#/g, '');
        setLeftNav(hash)      
    })

    React.useEffect(() => {
        window.addEventListener('hashchange', function() {
            let hash = global.location.hash;
            hash = hash.replace(/#/g, '');
            setLeftNav(hash) 
          }, false);    
    })

    const [releases, setReleases] = React.useState(SLArchive)
    React.useEffect(() => setReleases(SLArchive.reverse()), [])

    return (
        <Layout>

            <Col sm={3} xxl={2} className='leftNav d-none d-sm-block'>
                <LeftNav launcher='archived' id={id}
                    mainDir={mainDir}
                    Toc={archivedToc} />
            </Col>
            <Col xs={12} className='d-block d-sm-none'>
                <Button className='learnMob' onClick={handleShow}>
                    Archived Versions
                </Button>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <LeftNav launcher='archived' id={id}
                            mainDir={mainDir}
                            Toc={archivedToc} />
                    </Offcanvas.Body>
                </Offcanvas>
            </Col>
            <Col xs={12} sm={9} xxl={10} className='archiveContent'>
                <Container>
                    <Row className="cDownloadsHeader pageHeader pageContentRow">
                        <Col xs={12}>
                            <h1>Archived Versions</h1>
                        </Col>
                    </Row>


                    <Row className="pageHeader pageContentRow">
                        <Col xs={12}>
                            <Row className='archivedCategory'>
                                <h2 id='swan-lake-archived-versions'>Swan Lake archived versions</h2>
                                
                                {releases.map((item, index) => (
                                    <div className="installers" key={item.version}>
                                        <h3 className="releaseVersion" id={item.version}>{item.version} ({item['release-date']})</h3>
                                        <Row className="releasesRow">
                                            <Col xs={12} className="leftTable">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ width: "60%" }}>{item['linux-installer']}</td>
                                                            <td style={{ width: "10%" }}>
                                                                <a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}`}
                                                                    name={item['linux-installer']} data-pack={item['linux-installer']} target="">
                                                                    <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['linux-installer']} />
                                                                </a>
                                                            </td>
                                                            <td style={{ width: "10%" }}><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.md5`}>md5</a></td>
                                                            <td style={{ width: "10%" }}><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.sha1`}>SHA-1</a></td>
                                                            <td style={{ width: "10%" }}><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.asc`}>asc</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td >{item['windows-installer']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}`}
                                                                name={item['windows-installer']} data-pack={item['windows-installer']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['windows-installer']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.asc`}>asc</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>{item['macos-installer']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}`}
                                                                name={item['macos-installer']} data-pack={item['macos-installer']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['macos-installer']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.asc`}>asc</a></td>
                                                        </tr>

                                                        {
                                                            item['other-artefacts'].map((ot, index) => (
                                                                <tr key={ot}>
                                                                    <td >{ot}</td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}`}
                                                                        name={ot} data-pack={ot} target="">
                                                                        <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={ot} />
                                                                    </a>
                                                                    </td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.md5`}>md5</a></td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.sha1`}>SHA-1</a></td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.asc`}>asc</a></td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </Col>
                                        </Row>
                                        <div className="archivedReleaseNotes">
                                            <a className="archivedReleaseNotesLink" id={`${item.version}notes`} href={`${prefix}/downloads/1.2.x-release-notes/${item.version}`}>RELEASE NOTES</a>
                                        </div>
                                    </div>
                                ))}
                            </Row>

                            <Row className='archivedCategory'>
                                <div className='catTitleRow'>
                                    <h2 id='1.2.x-archived-versions'>1.2.x archived versions</h2>
                                    <a href='/1.2/learn/api-docs/ballerina/' className='apiDocs'>[API docs]</a>
                                </div>

                                {sortedRelease12x.map((item, index) => (

                                    <div className="installers" key={item.version}>
                                        <h3 className="releaseVersion" id={item.version}>{item.version} ({item['release-date']})</h3>
                                        <Row className="releasesRow">
                                            <Col xs={12} className="leftTable">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td >{item['linux-installer']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}`}
                                                                name={item['linux-installer']} data-pack={item['linux-installer']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['linux-installer']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.asc`}>asc</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td >{item['windows-installer']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}`}
                                                                name={item['windows-installer']} data-pack={item['windows-installer']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['windows-installer']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.asc`}>asc</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td >{item['macos-installer']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}`}
                                                                name={item['macos-installer']} data-pack={item['macos-installer']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['macos-installer']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.asc`}>asc</a></td>
                                                        </tr>

                                                        {
                                                            item['other-artefacts'].map((ot, index) => (
                                                                <tr key={ot}>
                                                                    <td >{ot}</td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}`}
                                                                        name={ot} data-pack={ot} target="">
                                                                        <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={ot} />
                                                                    </a>
                                                                    </td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.md5`}>md5</a></td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.sha1`}>SHA-1</a></td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.asc`}>asc</a></td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </Col>
                                        </Row>
                                        <div className="archivedReleaseNotes">
                                            <a className="archivedReleaseNotesLink" id={`${item.version}notes`} href={`${prefix}/downloads/1.2.x-release-notes/${item.version}`}>RELEASE NOTES</a>
                                        </div>
                                    </div>
                                ))}
                            </Row>


                            <Row className='archivedCategory'>
                                <div className='catTitleRow'>
                                    <h2 id='1.1.x-archived-versions'>1.1.x archived versions</h2>
                                    <a href='/1.1/learn/api-docs/ballerina/' className='apiDocs'>[API docs]</a>
                                </div>

                                
                                {sortedRelease11x.map((item, index) => (

                                    <div className="installers" key={item.version}>
                                        <h3 className="releaseVersion" id={item.version}>{item.version} ({item['release-date']})</h3>
                                        <Row className="releasesRow">
                                            <Col xs={12} className="leftTable">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td >{item['linux-installer']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}`}
                                                                name={item['linux-installer']} data-pack={item['linux-installer']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['linux-installer']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.asc`}>asc</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td >{item['windows-installer']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}`}
                                                                name={item['windows-installer']} data-pack={item['windows-installer']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['windows-installer']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.asc`}>asc</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td >{item['macos-installer']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}`}
                                                                name={item['macos-installer']} data-pack={item['macos-installer']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['macos-installer']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.asc`}>asc</a></td>
                                                        </tr>
                                                        {
                                                            item['other-artefacts'].map((ot, index) => (
                                                                <tr key={ot}>
                                                                    <td >{ot}</td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}`}
                                                                        name={ot} data-pack={ot} target="">
                                                                        <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={ot} />
                                                                    </a>
                                                                    </td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.md5`}>md5</a></td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.sha1`}>SHA-1</a></td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.asc`}>asc</a></td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </Col>
                                        </Row>
                                        <div className="archivedReleaseNotes">
                                            <a className="archivedReleaseNotesLink" id={`${item.version}notes`} href={`${prefix}/downloads/1.1.x-release-notes/${item.version}`}>RELEASE NOTES</a>
                                        </div>
                                    </div>
                                ))}
                            </Row>


                            <Row className='archivedCategory'>
                                <div className='catTitleRow'>
                                    <h2 id='1.0.x-archived-versions'>1.0.x archived versions</h2>
                                    <a href='/1.0/learn/api-docs/ballerina/' className='apiDocs'>[API docs]</a>
                                </div>
                                
                                {sortedRelease10x.map((item, index) => (

                                    <div className="installers" key={item.version}>
                                        <h3 className="releaseVersion" id={item.version}>{item.version} ({item['release-date']})</h3>
                                        <Row className="releasesRow">
                                            <Col xs={12} className="leftTable">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td >{item['linux-installer']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}`}
                                                                name={item['linux-installer']} data-pack={item['linux-installer']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['linux-installer']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.asc`}>asc</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td >{item['windows-installer']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}`}
                                                                name={item['windows-installer']} data-pack={item['windows-installer']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['windows-installer']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.asc`}>asc</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td >{item['macos-installer']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}`}
                                                                name={item['macos-installer']} data-pack={item['macos-installer']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['macos-installer']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.asc`}>asc</a></td>
                                                        </tr>

                                                        {
                                                            item['other-artefacts'].map((ot, index) => (
                                                                <tr key={ot}>
                                                                    <td >{ot}</td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}`}
                                                                        name={ot} data-pack={ot} target="">
                                                                        <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={ot} />
                                                                    </a>
                                                                    </td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.md5`}>md5</a></td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.sha1`}>SHA-1</a></td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.asc`}>asc</a></td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </Col>
                                        </Row>
                                        <div className="archivedReleaseNotes">
                                            <a className="archivedReleaseNotesLink" id={`${item.version}notes`} href={`${prefix}/downloads/1.0.x-release-notes/${item.version}`}>RELEASE NOTES</a>
                                        </div>
                                    </div>
                                ))}
                            </Row>


                            <Row>
                                <div className='catTitleRow'>
                                    <h2 id='0.9.x-archived-versions'>0.9.x archived versions</h2>
                                    <a href='/0.990/learn/api-docs/ballerina/' className='apiDocs'>[API docs]</a>
                                </div>
                                
                                {sortedRelease09x.map((item, index) => (

                                    <div className="installers" key={item.version}>
                                        <h3 className="releaseVersion" id={item.version}>{item.version} ({item['release-date']})</h3>
                                        <Row className="releasesRow">
                                            <Col xs={12} className="leftTable">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td >{item['linux-installer']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}`}
                                                                name={item['linux-installer']} data-pack={item['linux-installer']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['linux-installer']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.asc`}>asc</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td >{item['windows-installer']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}`}
                                                                name={item['windows-installer']} data-pack={item['windows-installer']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['windows-installer']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.asc`}>asc</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td >{item['macos-installer']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}`}
                                                                name={item['macos-installer']} data-pack={item['macos-installer']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['macos-installer']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.asc`}>asc</a></td>
                                                        </tr>

                                                        {
                                                            item['other-artefacts'].map((ot, index) => (
                                                                <tr key={ot}>
                                                                    <td >{ot}</td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}`}
                                                                        name={ot} data-pack={ot} target="">
                                                                        <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={ot} />
                                                                    </a>
                                                                    </td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.md5`}>md5</a></td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.sha1`}>SHA-1</a></td>
                                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.asc`}>asc</a></td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </Col>
                                        </Row>
                                        {
                                            (item.version === '0.990.7' || item.version === '0.990.5') ?
                                                null
                                                : <div className="archivedReleaseNotes">
                                                    <a className="archivedReleaseNotesLink" id={`${item.version}notes`} href={`${prefix}/downloads/0.9.x-release-notes/${item.version}`}>RELEASE NOTES</a>
                                                </div>
                                        }

                                    </div>
                                ))}
                            </Row>

                        </Col>
                    </Row>


                </Container>
            </Col>


        </Layout>

    );
}