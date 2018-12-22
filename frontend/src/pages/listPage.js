import Header from '../components/Header'
import Layout from '../components/MyLayout.js'
import MinuteTranscript from '../components/MinuteTranscript'
import Head from 'next/head'
import axios from 'axios';
import { withRouter } from 'next/router'

import { Tab , Col , ListGroup , Row , Button ,ListGroupItem } from 'react-bootstrap';

export default withRouter( class TranscriptLists extends React.Component {
  rank = 7

  constructor(props, context) {
    super(props, context);
    this.state ={
      url    : 'hi',
      lines  : [],
      mainObj: {}
    }
  }
  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
  regex = /\[\*{7}\s(.*)\]/i
  regex2 = /\[\*{6}\s(.*)\]/i

  format(url){
    let lines = url.split(/(\[\*{7}\s.*\])/)

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i]
    }


    let lines2 = lines.map((each,num)=>{
      let match = each.match(this.regex)
      if(match == null){return}
      let name    = each.match(this.regex)[1]
      let content = lines[num+1]
      return {name:name, content:content}
    }).filter(Boolean);


    let lines3 = lines2.map((each,num)=>{
      let lines  = each.content.split(/(\[\*{6}\s.*\])/)
      let parent = each.name

      let lines2 = lines.map((each,num)=>{
        let match = each.match(this.regex2)
        if(match == null){return}
        let name    = each.match(this.regex2)[1]
        let content = lines[num+1]
        return {name:name, content:content}
      }).filter(Boolean);
      return {name:each.name, literal:each.content, content:lines2}
    }).filter(Boolean);

    console.log(lines3, 'heha')
    this.setState({lines:lines})
    this.setState({mainObj:lines3})

  }
  componentWillMount() {
    const { router } = this.props
    this.setState( {url:router.query.url})
    this.format(router.query.url)
  }

  componentDidMount(){}

  Iterate = () => {
    return (
      this.state.mainObj.map((each1,key1)=>{

      return each1.content.map((each2,key2)=>{
        return (
        <ListGroup.Item action href={`#${key1},${key2}`}>
        {each2.name}
        </ListGroup.Item>
        )
      }
    )
    })
    )
  }

  Iterate2 = () => {
    return (
      this.state.mainObj.map((each1,key1)=>{
        return each1.content.map((each2,key2)=>{
          let val = `${each2.name}
[
${each2.content}
#${each1.name.toLowerCase().replace(/\s/g,'-')}
#humanpose
`
          return (
            <Tab.Pane eventKey={`#${key1},${key2}`}>
            <textarea rows="24" cols="100" defaultValue={val}/>
            <center>
            <Button onClick={()=>axios.get(`http://127.0.0.1:5000/sb?text=${encodeURIComponent(val)}`).then(console.log('yay'))} >
            POST</Button>
            </center>
            </Tab.Pane>
          )
      })})
      // this.state.lines.map((each,key)=>{
      //   let val  = this.state.lines[key] + this.state.lines[key+1]
      //       val += '\n #game'
      //   return (

      //     <Tab.Pane eventKey={'#'+key}>
      //     <textarea rows="24" cols="100" defaultValue={val}/>
      //     <center>
      //     <Button onClick={()=>console.log(yo)} > http://127.0.0.1:5000/sb/POST</Button>
      //     </center>
      //     </Tab.Pane>
      //   )
      // })
    )
  }
  render () {
    console.log()

    // Return properties
    return (
      <div>
        <Head>
            <title>Edit</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.1/build/pure-min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        </Head>
        {/* <div className='tableStyle'>
            {
              this.props.data.map( (each) => {
                return (
                  <center>
                    <MinuteTranscript data={each}/>
                  </center>
                )
              })
            }
        </div> */}
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">

          <Row>
            <Col sm={4}>
              <div style={{overflowY:'scroll', height:'700px'}}>
              <ListGroup>
                <this.Iterate />
              </ListGroup>
              </div>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <this.Iterate2/>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <style jsx global>{`
          .tableStyle {
              text-align: center;
              padding   : 50px;
          }
        `}</style>
      </div>
    );
  }

})
