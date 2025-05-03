import { Button, TextField } from '@mui/material';
import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Liên hệ với chúng tôi</h2>
      
      <form className="space-y-4">
        <TextField 
          label="Họ và Tên" 
          variant="outlined" 
          fullWidth 
        />
        <TextField 
          label="Số điện thoại" 
          variant="outlined" 
          fullWidth 
        />
        <TextField 
          label="Email" 
          type="email"
          variant="outlined" 
          fullWidth 
        />
        <TextField 
          label="Bình luận" 
          multiline 
          rows={4} 
          variant="outlined" 
          fullWidth 
        />

        <div className="text-center">
          <Button className='btn-org' variant="contained" color="primary" type="submit">
            Gửi liên hệ
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Contact;