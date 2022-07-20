const Students = ({ students, children }) => {
    return (
        <>
            {children}
            {
                students.map((student, index) => (
                    <div key={index}>
                        <p>{student.name}  - {student.email}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Students;