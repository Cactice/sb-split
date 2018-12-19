import React from 'react';
import { Button , Collapse , Grid , Row } from 'react-bootstrap';
import Head from 'next/head'
import axios from 'axios';
import FA from 'react-fontawesome';
export default class MinuteTranscript extends React.Component {
  constructor(props) {
      super(props);
      this.state     = {summary : 'Waiting'  }
      this.summarize = this.summarize.bind(this);
  }

  async summarize(transcript){
    let summaryString = this.props.data.map(function(eachLine){
        return eachLine.text;
    }).join('. ');

    let summarySentences = summaryString
    console.log('sentence: ',summarySentences)
    const url = 'https://youtube-index-backend.herokuapp.com/summarize/'+ encodeURI(summarySentences) + '/english'
    console.log(url)
    const res = await axios.get(url)
    this.setState({summary:res.data})
  }
  render() {
      console.log('ponpon',this.props.data)
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        </Head>
        <table className="minuteTranscript">
          <thead>
            <tr>
              <th>Position</th>
              <th>Transcript</th>
            </tr>
          </thead>
            <tr>
            <td>
              <Button onClick={this.summarize}>
                <FA name="eye" />
              </Button>
            </td>
            <td>

            <Collapse in={!(this.state.summary == 'Waiting')}>
            <div style={{width:400}}>
            {this.state.summary}
            </div>
            </Collapse>
            </td>
            </tr>
          <tbody>
            {this.props.data.map((each, i) => {
              return (
                <tr key={i}>
                <td>{each.startSeconds}</td>
                <td style={{width:400}}>{each.text}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <style jsx global>{`
          .minuteTranscript {
              padding: 20px;
          }
        `}</style>
      </div>
    )
  }
}
