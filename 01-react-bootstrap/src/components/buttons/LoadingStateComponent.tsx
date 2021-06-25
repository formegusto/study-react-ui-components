import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";

const simulatorNetworkRequest = () =>
  new Promise((resolve) => setTimeout(resolve, 2000));

function LoadingStateComponent() {
  const [loading, setLoading] = useState<boolean>(false);

  const requestNetwork = useCallback(async () => {
    setLoading(true);
    try {
      await simulatorNetworkRequest();
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Button
      variant="primary"
      disabled={loading}
      onClick={loading ? () => {} : requestNetwork}
    >
      {loading ? "Loading..." : "Network Simulator"}
    </Button>
  );
}

export default LoadingStateComponent;
