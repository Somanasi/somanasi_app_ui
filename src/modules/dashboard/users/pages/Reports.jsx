import React from 'react'
import { FaFileDownload, FaLifeRing, } from 'react-icons/fa'
import { PDFViewer, Document, Page, View, Text, PDFDownloadLink } from '@react-pdf/renderer';

const CourseSummary = ({ course }) => {
    const styles = {
        page: {
          flexDirection: 'row',
          backgroundColor: '#ffffff',
        },
        section: {
          margin: 10,
          padding: 10,
          flexGrow: 1,
        },
        title: {
          fontSize: 24,
          marginBottom: 10,
        },
        content: {
          fontSize: 12,
        },
      };
  
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.content}>{course.summary}</Text>
          </View>
        </Page>
      </Document>
    );
  };


const Reports = () => {
    
    const course = {
        title: 'Couse name: Computer Science',
        summary: 'Dealing with maths and science about computerss',
      };

  return (
    <>
       <article className='m-0 sm:px-1 md:px-2 lg:px-16'>
        {/* top section */}
    
        <hr/>

        {/* Display section */}   
        <main className='sm:w-[100%] mt-2'>
            <div className='w-auto'>
                <h1 className='p-2 text-md font-bold text-blue-600'>Course Summary</h1>
                <PDFViewer className='w-[100%] h-[80vh]'>
                    <CourseSummary course={course} />
                </PDFViewer>
                <PDFDownloadLink document={<CourseSummary course={course} />} fileName="course_summary.pdf">
                    {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
            </div>
        </main>
      </article>
    </>
  )
}

export default Reports
