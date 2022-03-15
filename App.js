import React from 'react'
import { CartesianGrid, Line, Bar, BarChart, LineChart, Tooltip, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts'
import './App.css'

const MyJson = require('./Stock JSON.json');

function App () {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    setData(MyJson)
  }, [])


  return (

    
    <div className='App'>
      <div>
        <LineChart
          width={1300}
          height={400}
          data={data}
          margin={{ top: 50, right: 20, left: 50, bottom: 20 }}
        > 
          <XAxis dataKey='Date' />
          <YAxis dataKey='High' />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke='#f5f5f5' />
          <Line type='monotone' dataKey='Open' stroke='#ff7300'  />
          <Line type='monotone' dataKey='Close' stroke='#387908'  />
        </LineChart>
      </div>

      <div className='data_table'>
        <table>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>Close</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.Date}</td>
                <td>{val.Open}</td>
                <td>{val.Close}</td>
              </tr>
            )
          })}
        </table>
        </div>
    </div>
  )
}


export default App
