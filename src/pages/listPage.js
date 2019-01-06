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
  titleRegex = (rank)=>{return new RegExp(`\\*{${rank}}\\s(.*)\\]`)}
  regex2     = /\[\*{6}\s(.*)\]/i
  splitRegex = (rank)=>{return new RegExp(`(\\[\\*{${rank}}\\s.*\\])`)}


  splitByAsterisk(target,asteriskRank,parentList){
    let children = target.split(this.splitRegex(asteriskRank))
    if(children == 'undefined'){return}
    let childrenMap = children.map((child,num) => {
      let titleRegex = this.titleRegex(asteriskRank)
      let match      = child.match(titleRegex)
      if(match == null){return}
      let title         = child.match(titleRegex)[1]
      let content       = children[num+1]
      let newParentList = parentList.slice()

      newParentList.push(title)
      let childrenOfThis = this.splitByAsterisk(content,asteriskRank-1,newParentList)
      return {title:title, content:content, children:childrenOfThis, parentList:parentList}
    })
    return childrenMap.filter(Boolean)
  }

  format(url){
    let formatted = this.splitByAsterisk(url,7,[])
    console.log(formatted)
    this.setState({mainObj:formatted})

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
      return each1.children.map((each2,key2)=>{
        return (
        <ListGroup.Item action href={`#${key1},${key2}`}>
        {each2.title}
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
        return each1.children.map((each2,key2)=>{
          let val = `${each2.title}
${each2.content}
#${each1.title.toLowerCase().replace(/\s/g,'-')}
`
          return (
            <Tab.Pane eventKey={`#${key1},${key2}`}>
            <textarea rows="24" cols="100" defaultValue={val} onChange={(event)=>{val=event.target.value;}}/>
            <center>
            <Button onClick={()=>window.open(`http://scrapbox.io/artresearch/new?body=${encodeURIComponent(val)}`)}>
            POST</Button>
            </center>
            </Tab.Pane>
          )
      })})
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
