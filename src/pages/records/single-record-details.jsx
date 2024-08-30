import { IconFileUpload } from "@tabler/icons-react";
import React from "react";
import RecordDetailsHeader from "./components/record-details-header";
import { useLocation } from "react-router-dom";




const SingleRecordDetails = () => {

    const { state } = useLocation();
    return (
        <div className="flex flex-wrap gap-[26px]">
            <button
                type="button"
                // onClick={handleOpenModal}
                className="mt-6 inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-[#13131a] dark:text-white dark:hover:bg-neutral-800"
            >
                <IconFileUpload />
                Upload Reports
            </button>

            {/* fileUploadModal */}
            <RecordDetailsHeader recordName={state} />
        <div className="w-full">
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="inline-block min-w-full p-1.5 align-middle">
                        <div className="overflow-hidden rounded-xl border-neutral-700 shadow-sm bg-[#13131a]">
                            <div className="border-b border-neutral-700 px-6 py-4">
                                    <h2 className="text-xl font-semibold text-neutral-200">
                                        Personalized AI-Driven Treatment Plan
                                    </h2>
                                    <p className="text-sm text-neutral-400">
                                        A tailored medical strategy leveraging advanced AI insights.
                                    </p>
                            </div>

                            <div className="flex w-full flex-col px-6 py-4 text-white">
                                    <h2 className="text-lg font-semibold text-white">
                                        Analysis Result
                                    </h2>

                                    <div className="space-y-2">
                                        {'rendering the result here'}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SingleRecordDetails;