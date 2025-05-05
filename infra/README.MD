# 🚀 Kubernetes Cluster with Kind + Ingress on WSL2

Set up a local Kubernetes development environment using [Kind](https://kind.sigs.k8s.io/), [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/), and Docker Desktop inside a WSL2-based Linux distro on Windows.

---

## 🧰 Prerequisites

Before you begin, ensure you have:

1. ✅ Windows 10/11 with [WSL2 enabled](https://learn.microsoft.com/en-us/windows/wsl/install)
2. ✅ A WSL2-compatible Linux distro (e.g., **Ubuntu** or **Debian**)
3. ✅ [Docker Desktop](https://www.docker.com/products/docker-desktop):

   * ✔️ *“Use WSL 2 based engine”* enabled under **Settings > General**
   * ✔️ WSL integration enabled under **Settings > Resources > WSL Integration**

---

## 📁 Project Structure

```bash
your-project/
├── kind-config.yaml        # Kind cluster config with port mappings
└── README.md               # This file
```

---

## ⚙️ Setup Steps

### 1. Enable Docker WSL2 Integration

1. Open **Docker Desktop**
2. Go to **Settings → Resources → WSL Integration**
3. ✅ Enable integration for your Linux distro (e.g. `Ubuntu`)
4. Click **Apply & Restart**

---

### 2. Create `kind-config.yaml`

Save this file to your project root:

```yaml
# kind-config.yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
  - role: control-plane
    extraPortMappings:
      - containerPort: 80
        hostPort: 8080
        protocol: TCP
      - containerPort: 443
        hostPort: 8443
        protocol: TCP
```

This maps:

* `localhost:8080` to Ingress port 80
* `localhost:8443` to Ingress port 443

---

### 3. Create the Kind Cluster

Run from your **WSL terminal** (not PowerShell):

```bash
kind create cluster --name ecommerce-dev --config kind-config.yaml
```

---

### 4. Deploy the NGINX Ingress Controller

Apply the official Ingress manifest:

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

---

### 5. Wait for Ingress Controller to Become Ready

Run:

```bash
kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=120s
```

---

### 6. (⚠️ Optional) Fix nodeSelector if Controller Is Pending

If step 5 times out, patch the deployment to remove the `nodeSelector`:

```bash
kubectl -n ingress-nginx patch deploy ingress-nginx-controller \
  --type='json' -p='[{"op": "remove", "path": "/spec/template/spec/nodeSelector"}]'
```

Then re-run the wait command in step 5.

---

### 7. Test Ingress Is Working

Port-forward the Ingress controller service:

```bash
kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller 8080:80
```

Then visit: [http://localhost:8080](http://localhost:8080)

You should see a 404 or NGINX default page — this confirms Ingress is working.

---

## 🔁 Reset / Recreate the Cluster

### 1. Delete the cluster

```bash
kind delete cluster --name ecommerce-dev
```

### 2. (Optional) Clean up Docker state

```bash
docker system prune -af
```

---

## 🧚 Next Step: Deploy a Sample App

You can now deploy your own services with Ingress rules.

Want a working example with:

* A sample service
* Deployment YAML
* Ingress config

👉 Ask for the `ecommerce-demo` deployment.

---

## 📚 References

* 📘 [Kind Docs](https://kind.sigs.k8s.io/docs/)
* 📘 [Ingress NGINX Docs](https://kubernetes.github.io/ingress-nginx/)
* 📘 [WSL2 Setup](https://learn.microsoft.com/en-us/windows/wsl/install)
* 📘 [Docker Desktop + WSL2](https://docs.docker.com/desktop/wsl/)

---
