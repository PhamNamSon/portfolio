export const Sentinel = () => {
	return (
		<div className="bg-card p-6 md:p-8 rounded-lg space-y-8 max-w-4xl mx-auto">
			<figure className="flex flex-col items-center">
				<img
					src="architecture.svg"
					alt="Sentinel platform architecture diagram"
					className="w-full h-auto max-w-3xl"
				/>
				<figcaption className="text-xs mt-2 text-muted-foreground">
					View full size{" "}
					<a
						href="architecture.svg"
						target="_blank"
						rel="noreferrer"
						className="text-primary hover:underline"
					>
						here
					</a>
					.
				</figcaption>
			</figure>

			<div className="space-y-4 text-[1.05rem] leading-relaxed text-left">
				<p>
					See the full code{" "}
					<a
						href="https://github.com/PhamNamSon/sentinel_lab"
						target="_blank"
						rel="noreferrer"
						className="text-primary hover:underline"
					>
						here
					</a>
					.
				</p>

				<p>
					<strong>Kubernetes Platform with GitOps Delivery</strong> - Provisioned a
					two-node K3s cluster with Ansible and managed every workload through ArgoCD
					using an app-of-apps pattern, so cluster state lives in Git with automated
					sync and self-heal. A Spring Boot API and Oracle database are packaged as
					custom Helm charts with autoscaling, health probes, and Traefik ingress.
				</p>

				<p>
					<strong>CI/CD Pipeline</strong> - Implemented GitHub Actions
					workflows that run integration tests against a real Oracle container, lint
					and render the Helm charts on every pull request, and publish versioned
					images to GHCR when a release tag is pushed.
				</p>

				<p>
					<strong>Full-Stack Observability</strong> - Built unified metrics, logs, and
					traces with Prometheus, Loki, Tempo, and Grafana, collected through Alloy and
					the OpenTelemetry Java agent. Logs link to their traces and latency exemplars
					link to individual requests. Dashboards and alert rules are versioned as code
					and validated with k6 load tests that have pass/fail thresholds.
				</p>
			</div>
		</div>
	);
};