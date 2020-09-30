import React, { Fragment } from 'react';
import AddReport from '../components/AddReport'
import ReportsList from '../components/ReportsList'

export default function ReportsPage() {
    return (
        <Fragment>
            <AddReport />
            <ReportsList />
        </Fragment>
    )
}
