// const [lastSeen, setLastSeen] = useState(null);

  // useEffect(() => {
  //   const updateLastSeen = async () => {
  //     try {
  //       await axios.put(`/users/${userId}/lastseen`);
  //       setLastSeen(new Date());
  //     } catch (error) {
  //       console.error(error);
  //       // Handle error
  //     }
  //   };

  //   updateLastSeen();
  //   const interval = setInterval(updateLastSeen, 60000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [userId]);