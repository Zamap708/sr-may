import React from 'react'

export default function Events() {
  return (
      <div className='w-full h-full bg-bgcolor2 flex flex-col md:flex-row justify-center items-center md:items-start'>
           <div className='md:w-1/3 h-fit md:pl-14 pl-4 md:pt-9'>
            <h1 className='text-6xl text-heading font-roxbo'>Schedule<br></br>of Events</h1>
        </div>
        <div className='md:w-2/3 bg-bgcolor2 font-gotham text-heading md:pl-40'>
            <table className="table-auto border-collapse ml-2 mt-10 ">
                {/*Note Values under Date, event , venue are hardcoded tempoary values used */}
                <tbody>
                    <tr className="border-b border-black font-bold">
                        <td className="px-4 py-2">Date</td>
                        <td className="px-6 py-2">Event</td>
                        <td className="px-8 py-10">Venue</td>
                    </tr>
                
                    <tr className="border-b border-black space-x-4">
                        <td className="px-4 py-2">9:00 AM</td>
                        <td className="px-6 py-2 font-bold">Morning Service and Fellowship</td>
                        <td className="px-8 py-10 ">Einat Sharon</td>
                    </tr>
                    <tr className="border-b border-black space-x-4">
                        <td className="px-4 py-2">10:00 AM</td>
                        <td className="px-6 py-2 font-bold">Session or Seminar title</td>
                        <td className="px-8 py-10">Name of speaker</td>
                    </tr>
                    <tr className="border-b border-black space-x-4">
                        <td className="px-4 py-4">4:00 PM</td>
                        <td className="px-6 py-4 font-bold">Session or Seminar title</td>
                        <td className="px-8 py-10">Name of speaker</td>
                    </tr>
                    <tr className="space-x-4">
                        <td className="px-4 py-4">6:00 PM</td>
                        <td className="px-6 py-4 font-bold">Session or Seminar title</td>
                        <td className="px-8 py-10">Name of speaker</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
  )
}
