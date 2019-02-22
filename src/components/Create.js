import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

const CreateImage = ({

}) => {
    return (
        <div>
            <Dropzone>
                <p>Drag and drop a picture of some of your past projects or click to select a file.</p>
            </Dropzone>
        </div>
    )
}