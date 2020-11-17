import React, { Component } from 'react'
import TableauReport from 'tableau-react';
 
class Election extends Component {
    render() {
        return (
            <>
              <TableauReport
                url="https://public.tableau.com/views/AgeTreeMapFinal/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
            />
              <TableauReport
                url="https://public.tableau.com/views/FinalExamDATA/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
            />
              <TableauReport
                url="https://public.tableau.com/views/FinalExamDATA/Sheet2?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
            />
              <TableauReport
                url="https://public.tableau.com/shared/B2NMN4334?:display_count=y&:origin=viz_share_link"
            />


                          <TableauReport
                url="https://public.tableau.com/views/FinalExamDATA/Sheet4?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
            />

            </>

        )
    }
}

export default Election;
