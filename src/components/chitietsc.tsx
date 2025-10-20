import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export default function StudentDetail() {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setStudent(res.data));
  }, [id]);

  if (!student) return <p>Đang tải</p>;

  return (
    <div>
      <h2>Chi tiết sinh viên</h2>
      <p><strong>Họ tên:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Điện thoại:</strong> {student.phone}</p>
      <p><strong>Website:</strong> {student.website}</p>
      <Link to="/bai2">-- Quay lại danh sách</Link>
    </div>
  );
}