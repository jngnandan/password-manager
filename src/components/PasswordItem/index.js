
import React, { Component } from 'react'

export class PasswordItem extends Component {

    render(props) {
        const { tempList, deltePassword, viewPassword } = this.props
        const { id, website, username, password } = tempList

        const deleteItem = () => {
            deltePassword(id)
        }
        return (
            <div>
                {!viewPassword ?
                    <div className='border h-24 w-44 border-gray-500 p-2 mr-2 mt-2 rounded flex flex-row justify-start items-center'>
                        <button className='w-8 h-8 rounded-full bg-green-500 text-white'>S</button>
                        <div className='mx-2 text-white w-20'>
                            <p className='font-semibold text-white'>{website}</p>
                            <h1 className='mb-1 text-white'>{username}</h1>
                            {/* <p>{encrypted}</p> */}
                            <p className='text-white text-left'>{password}</p>

                        </div>
                        <button onClick={deleteItem}>
                            <img alt='delete' className='w-6' src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png" />
                        </button>

                    </div>
                    :
                    <div className='h-24 border border-gray-500 p-2 mr-2 mt-2 rounded flex flex-row justify-start items-center'>
                        <button className='w-8 h-8 rounded-full bg-green-500 text-white'>S</button>
                        <div className='mx-2 text-white'>
                            <p className='font-semibold text-white'>{website}</p>
                            <h1 className='mb-1 text-white'>{username}</h1>
                            {/* <p>{encrypted}</p> */}
                            <img alt='stars' className='w-24 mt-2' src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png" />
                        </div>
                        <button onClick={deleteItem}>
                            <img alt='delete' className='w-6' src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png" />
                        </button>

                    </div>

                }
            </div>

        )
    }
}

export default PasswordItem
